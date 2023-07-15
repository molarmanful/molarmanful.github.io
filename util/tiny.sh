#!/bin/bash

dirs=(covers art)

cd src/lib || exit
rm -rf tiny media/tiny
mkdir -p tiny media/tiny

resize() {
  [[ "${1##*.}" == "svg" ]] && return

  if [ "$2" ]; then
    path="media/tiny/$(basename "${1%.*}")_tiny.${1##*.}"
  else
    path="tiny/$(basename "${1%.*}").tiny"
  fi

  convert "$1[0]" -resize 32x32 "$path"

  echo "$1 > $path"
}
export -f resize

for dir in "${dirs[@]}"; do
  find "$dir" -type f -print0 | xargs -0 -I {} -P "$(nproc)" bash -c 'resize "$@"' _ {}
done

find media -type f -print0 | xargs -0 -I {} -P "$(nproc)" bash -c 'resize "$@" 1' _ {}
