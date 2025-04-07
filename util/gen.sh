#!/usr/bin/env -S bash -e

cores="$(nproc --all)"

gen() {
  local file="${2##*/}"
  local name="${file%%.*}"
  v=$(node util/ver "$1" "$name")
  node util/pics "$2" "out/$1@$name@$v" "$cores"
}

rm -rf out
mkdir -p out

for x in media art covers; do
  for f in src/lib/"$x"/*; do
    if [[ -n $(git status --porcelain "$f") ]]; then
      gen "$x" "$f"
    fi
  done
done
