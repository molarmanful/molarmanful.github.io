#!/usr/bin/env nu

def main [] {
  util/hash.nu
  let cores = sys cpu | length

  rm -rf out
  mkdir out

  [media art covers]
  | each {|dir|
      ls $'src/lib/($dir)' | get name
      | filter { git status --porcelain $in | is-not-empty }
      | each {|file|
          let name = $file | path parse | get stem
          let hash = open $'src/common/hashes/($dir).json' | get $name
          node util/pics $file $'out/($dir)@($name)@($hash)' $cores | print
        }
    }

  return
}
