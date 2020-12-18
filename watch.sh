#!/bin/sh -x
(yarn install && yarn start &)
apk update && apk add inotify-tools
cd src
while true; do
  echo '' &&
  echo '--------------------------------------------------------------------' &&
  echo '' &&
  sleep 1 &&
  inotifywait -m --exclude "sample.log" --exclude "sample.pdf" --exclude "sample.aux" --exclude "index.html" "." -r -e modify|pdflatex *.tex
done
cd -
