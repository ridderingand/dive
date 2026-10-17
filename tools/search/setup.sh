#!/usr/bin/env bash
# One-time: create the disposable runtime (venv + local embedding model cache) OUTSIDE the vault.
set -euo pipefail
IDX="${DIVE_INDEX_DIR:-/workspace/dive-index}"
mkdir -p "$IDX"
python3 -m venv "$IDX/venv"
"$IDX/venv/bin/pip" install -q -r "$(dirname "$0")/requirements.txt"
echo "ready: $IDX/venv  (model BAAI/bge-small-en-v1.5 downloads on first use into $IDX/models)"
echo "next:  $(cd "$(dirname "$0")" && pwd)/dive-index --rebuild"
