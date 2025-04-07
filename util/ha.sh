#!/usr/bin/env -S bash -e

tmp=$(mktemp)

for x in media art covers; do
  echo "[$x]"
  for f in src/lib/"$x"/*; do
    file="${f##*/}"
    name="${file%%.*}"
    v=$(sha256sum -b $f | cut -f1 -d\  | xxd -r -p | basenc --base64url)
    echo "\"$name\"=\"$v\""
  done
done | dasel -r toml -w json > src/lib/js/shas.json
