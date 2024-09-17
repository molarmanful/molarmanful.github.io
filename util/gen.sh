#!/bin/bash -e

cores="$(nproc --all)"

gen() {
  local file="${2##*/}"
  local name="${file%%.*}"
  node util/pics "$2" "out/$1@$name" "$cores"
}

mkdir -p out

if [ $# -gt 0 ]; then
  gen "$1" src/lib/"$1/$2"
else
  for x in media art covers; do
    for f in src/lib/"$x"/*; do
      gen "$x" "$f"
    done
  done
fi
