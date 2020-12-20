FROM node:12.20.0-alpine3.12

RUN apk update && apk add texlive-full

ENTRYPOINT ["tail", "-f"]
