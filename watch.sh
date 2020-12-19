#!/bin/sh -x
(yarn install && yarn start &)
apk update && apk add inotify-tools
cd src
while true; do
  echo '' &&
  echo '--------------------------------------------------------------------' &&
  echo '' &&
  sleep 1 &&
  rm -frv *.log *.pdf *.aux *.out &&
  inotifywait -m --exclude "*.out" --exclude "*.log" --exclude "*.pdf" --exclude "*.aux" --exclude "index.html" "." -r -e modify|pdflatex main.tex
done
cd -
