#!/usr/bin/env nu

def main [] {
  mkdir src/common/hashes
  [media art covers] | par-each {|dir|
      ls $'src/lib/($dir)' | get name
      | par-each {|file|
          [
            ($file | path parse | get stem)
            (open $file | hash md5)
          ]
        }
      | into record | sort | to json
      | save -f $'src/common/hashes/($dir).json'
    }
  | ignore
}
