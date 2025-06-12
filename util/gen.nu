#!/usr/bin/env nu

def main [] {
  util/hash.nu
  let hashes = open src/common/hashes.json
  let cores = sys cpu | length

  rm -rf out
  mkdir out

  [media art covers]
  | each {|dir|
      ls $'src/lib/($dir)' | get name
      | filter { git status --porcelain $in | is-not-empty }
      | each {|file|
          let name = $file | path parse | get stem
          let hash = $hashes | get $dir | get $name
          node util/pics $file $'out/($dir)@($name)@($hash)' $cores | print
        }
    }

  return
}
