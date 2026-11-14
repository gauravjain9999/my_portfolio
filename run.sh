#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$SCRIPT_DIR"

PORT="${PORT:-8000}"
printf 'Serving portfolio at http://127.0.0.1:%s\n' "$PORT"
exec npm run dev -- --host 127.0.0.1 --port "$PORT"
