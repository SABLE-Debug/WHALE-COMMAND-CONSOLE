#!/usr/bin/env bash
# Install all AKHARA skills to ~/.claude/skills/ on this machine.
# Run from the repo root: bash .claude/install.sh
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$REPO_DIR/.claude/skills"
DEST="$HOME/.claude/skills"

if [ ! -d "$SRC" ]; then
  echo "error: $SRC not found. Run this from the repo root." >&2
  exit 1
fi

mkdir -p "$DEST"

installed=0
skipped=0

for skill_dir in "$SRC"/*/; do
  name="$(basename "$skill_dir")"
  if [ -d "$DEST/$name" ]; then
    echo "  · skipped $name (already installed — remove $DEST/$name first to reinstall)"
    skipped=$((skipped + 1))
  else
    cp -r "$skill_dir" "$DEST/"
    echo "  ✓ installed $name"
    installed=$((installed + 1))
  fi
done

echo
echo "Done. Installed: $installed · Skipped: $skipped"
echo "Skills now available in any Claude Code session via /<skill-name>"
echo
echo "To uninstall one:    rm -rf $DEST/<skill-name>"
echo "To uninstall all:    rm -rf $DEST"
echo "To force reinstall:  rm -rf $DEST && bash $0"
