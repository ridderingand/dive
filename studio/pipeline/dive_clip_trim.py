#!/usr/bin/env python3
"""dive-clip-trim: build trimmed, synced per-clip tracks from full-length raw episode tracks.

Usage:
  dive_clip_trim.py RAW_DIR CUTS_JSON OUT_DIR [--tracks guest,ridd,screenshare] [--preset slow] [--no-audio]

RAW_DIR holds guest.mp4, ridd.mp4, screenshare.mp4 (screenshare optional).
Writes OUT_DIR/guest.mp4, ridd.mp4, screenshare.mp4 (if source exists) and audio.m4a
(guest+ridd dialogue mix), all starting at clip time 0 and exactly total_frames long.
Generalized from the James McDonald pack2.py; schema in README.md.
"""
import argparse, json, os, subprocess, sys, tempfile

TRACKS = ["guest", "ridd", "screenshare"]
# legacy keys from the James (face/screen) and Myles (guest-name) packs
LEGACY = {"guest": ["face", "james", "myles"], "ridd": ["face"], "screenshare": ["screen"]}


def src_frame(piece, track):
    for k in [track] + LEGACY.get(track, []):
        if f"{k}_in" in piece:
            return piece[f"{k}_in"]
    return None


def run(args):
    subprocess.run(["ffmpeg", "-y", "-v", "error"] + args, check=True)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("raw_dir"); ap.add_argument("cuts_json"); ap.add_argument("out_dir")
    ap.add_argument("--tracks", default=",".join(TRACKS))
    ap.add_argument("--preset", default="slow", help="x264 preset (use veryfast for tests)")
    ap.add_argument("--no-audio", action="store_true", help="skip audio.m4a mix")
    ap.add_argument("--max-pieces", type=int, default=0, help="only first N pieces (testing)")
    a = ap.parse_args()

    cuts = json.load(open(a.cuts_json))
    fps = cuts["fps"]; pieces = cuts["pieces"]
    if a.max_pieces:
        pieces = pieces[: a.max_pieces]
    sr_per_frame = 48000 / fps
    os.makedirs(a.out_dir, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="dct-")
    V = ["-c:v", "libx264", "-preset", a.preset, "-pix_fmt", "yuv420p", "-r", str(fps), "-g", str(fps * 2), "-bf", "2"]
    wavs = {}
    for track in a.tracks.split(","):
        src = os.path.join(a.raw_dir, f"{track}.mp4")
        if not os.path.exists(src):
            print(f"skip {track}: {src} not found", file=sys.stderr); continue
        vlist, alist = [], []
        for i, p in enumerate(pieces):
            f = src_frame(p, track)
            if f is None:
                sys.exit(f"piece {p.get('n', i+1)} has no in-frame for {track}")
            n = p.get("frames", p["clip_out"] - p["clip_in"]); st = f / fps
            o = os.path.join(tmp, f"{track}{i:03d}")
            tune = ["-tune", "stillimage", "-crf", "24"] if track == "screenshare" else ["-crf", "23"]
            run(["-ss", f"{st:.6f}", "-i", src, "-frames:v", str(n), "-an"] + V + tune + ["-maxrate", "1500k", "-bufsize", "3000k", o + ".mp4"])
            vlist.append(o + ".mp4")
            if track != "screenshare":
                ns = round(n * sr_per_frame)
                run(["-ss", f"{st:.6f}", "-i", src, "-vn", "-af", f"aresample=48000,atrim=end_sample={ns},apad=whole_len={ns}", "-ac", "1", "-c:a", "pcm_s16le", o + ".wav"])
                alist.append(o + ".wav")

        def concat(files, out):
            lst = out + ".txt"; open(lst, "w").write("".join(f"file '{x}'\n" for x in files))
            run(["-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", out])

        vcat = os.path.join(tmp, f"{track}_v.mp4"); concat(vlist, vcat)
        dst = os.path.join(a.out_dir, f"{track}.mp4")
        if alist:
            wav = os.path.join(tmp, f"{track}.wav"); concat(alist, wav); wavs[track] = wav
            run(["-i", vcat, "-i", wav, "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", dst])
        else:
            run(["-i", vcat, "-c", "copy", "-movflags", "+faststart", dst])
        print("wrote", dst)
    if not a.no_audio and wavs:
        ins = sum([["-i", w] for w in wavs.values()], [])
        mix = "".join(f"[{i}:a]" for i in range(len(wavs))) + f"amix=inputs={len(wavs)}:normalize=0,alimiter=limit=0.95[a]"
        dst = os.path.join(a.out_dir, "audio.m4a")
        run(ins + ["-filter_complex", mix, "-map", "[a]", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", dst])
        print("wrote", dst)


if __name__ == "__main__":
    main()
