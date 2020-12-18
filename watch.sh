#!/bin/sh -x
(yarn install && yarn start &)
apk update && apk add inotify-tools
cd src
while true; do
  echo '' &&
  echo '--------------------------------------------------------------------' &&
  echo '' &&
  sleep 1 &&
  inotifywait -m --exclude "*.log" --exclude "*.pdf" --exclude "*.aux" --exclude "index.html" "." -r -e modify|pdflatex sample.tex
done
cd -
