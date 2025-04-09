#!/usr/bin/env nu

def main [pass: string, remote: string] {
  let hashes = open src/common/hashes.json

  rclone --password-command $pass ls $remote
  | lines | parse -r '(?<dir>\S+)@(?<name>\S+)@(?<hash>\S+)@\d+.'
  | uniq | filter {
      with-env $in {
        $hashes | get $env.dir | get $env.name
        | $in != $env.hash
      }
    }
  | format pattern '{dir}@{name}@{hash}@*'
  | str join \n
  | rclone --password-command $pass delete $remote --include $in
}
