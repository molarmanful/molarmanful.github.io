#!/usr/bin/env -S bash -e

def main [pass: string, remote: string] {
  rclone --password-command $pass delete $remote --filter
}
