#!/usr/bin/env -S bash -e

cores="$(nproc --all)"

gen() {
  local file="${2##*/}"
  local name="${file%%.*}"
  hash=$(cat src/common/hashes.json | jq -r ".$1.\"$name\"")
  node util/pics "$2" "out/$1@$name@$hash" "$cores"
}

rm -rf out
mkdir -p out

util/ha.sh

for x in media art covers; do
  for f in src/lib/"$x"/*; do
    if [[ -n $(git status --porcelain "$f") ]]; then
      gen "$x" "$f"
    fi
  done
done
