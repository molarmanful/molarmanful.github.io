#!/usr/bin/env nu

def main [] {
  [media art covers] | par-each {|dir|
      ls $'src/lib/($dir)' | get name
      | par-each {|file|
          [
            ($file | path parse | get stem)
            (open $file | hash md5)
          ]
        }
      | into record | sort | [$dir $in]
    }
  | into record | to json | save -f src/common/hashes.json
}
