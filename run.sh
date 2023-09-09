#!/usr/bin/env bash

set -euo pipefail


upload() {
  firebase ext:dev:upload teaglebuilt/firebase-auth-outbox --local
}

function help {
  printf "%s <task> [args]\n\nTasks:\n" "${0}"
  compgen -A function | grep -v "^_" | cat -n
}

"${@:-help}"