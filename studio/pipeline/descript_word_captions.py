#!/usr/bin/env python3
"""Build word-level captions JSON from two read-only Descript export_transcript outputs.

  descript_word_captions.py DENSE_TXT SRT OUT_JSON --clip NAME --composition ID [--project ID] [--step 0.01]

DENSE_TXT: export_transcript(format:"txt", include_speaker_labels:"every_paragraph",
  timecodes:{frequency_seconds:0.01}). Descript writes one [HH:MM:SS] tick per 10 ms,
  and the ticks for word k and any silence after it come before word k in the text, so
  ticks-before-word-k * step = start of word k+1 (that is, end of k plus any trailing gap).
SRT: export_transcript(format:"srt", include_speaker_labels:"off"). Cue boundaries are exact (ms)
  and used to fix the start of the first word and the end of the last word in each cue (pauses).
"""
import argparse, json, re


def strip_fence(t):
    return re.sub(r'</?cursor_untrusted_data[^>]*>', '', t)


def norm(w):
    return re.sub(r"[^\w']", '', w.lower())


def main():
    ap = argparse.ArgumentParser(); ap.add_argument('dense'); ap.add_argument('srt'); ap.add_argument('out')
    ap.add_argument('--clip', required=True); ap.add_argument('--composition', required=True)
    ap.add_argument('--project', default=''); ap.add_argument('--step', type=float, default=0.01)
    a = ap.parse_args()
    words = []; ticks = 0; speaker = None
    for line in strip_fence(open(a.dense).read()).splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^([A-Z][\w .'-]{0,30}):\s", line)
        if m:
            speaker = m.group(1); line = line[m.end():]
        for tc, w in re.findall(r'(\[\d\d:\d\d:\d\d\])|([^\s\[]+)', line):
            if tc:
                ticks += 1
            else:
                words.append(dict(text=w, speaker=speaker, end=round(ticks * a.step, 3)))
    duration = round(ticks * a.step, 3)
    prev = 0.0
    for w in words:
        w['start'] = prev; prev = w['end']
    # SRT calibration
    cues = []
    for blk in re.split(r'\n\s*\n', strip_fence(open(a.srt).read()).strip()):
        L = blk.strip().splitlines()
        tl = next((x for x in L if '-->' in x), None)
        if not tl:
            continue
        s, e = [sum(float(p) * f for p, f in zip(x.strip().replace(',', '.').split(':'), (3600, 60, 1))) for x in tl.split('-->')]
        txt = ' '.join(L[L.index(tl) + 1:]).split()
        cues.append((s, e, txt))
    i = 0; mism = 0
    for s, e, txt in cues:
        n = len(txt)
        if [norm(x) for x in txt] != [norm(w["text"]) for w in words[i:i + n]]:
            mism += 1; print(" mismatch", txt[:6], [w["text"] for w in words[i:i + 6]])
        if i < len(words):
            words[i]['start'] = round(s, 3)
            j = min(i + n, len(words)) - 1
            words[j]['end'] = round(max(e, words[j]['start']), 3)
        i += n
    for w in words:
        w['start'] = round(min(w['start'], w['end']), 3)
    out = dict(format='dive-word-captions/v1', clip=a.clip, source='descript', project_id=a.project,
               composition_id=a.composition, timebase='seconds on the clip timeline (0 = clip start)',
               duration_s=duration, precision_s=a.step, words=[dict(i=k, text=w['text'], start=w['start'], end=w['end'], speaker=w['speaker']) for k, w in enumerate(words)])
    json.dump(out, open(a.out, 'w'), indent=1)
    print(a.clip, len(words), 'words', duration, 's', 'srt cue mismatches:', mism, 'of', len(cues))


if __name__ == '__main__':
    main()
