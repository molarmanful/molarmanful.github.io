#!/usr/bin/env -S bash -e

for x in media art covers; do
  echo "[$x]"
  for f in src/lib/"$x"/*; do
    file="${f##*/}"
    name="${file%%.*}"
    hash=$(md5sum -b "$f" | cut -f1 -d\ )
    echo "\"$name\"=\"$hash\""
  done
done | dasel -r toml -w json > src/common/hashes.json
