FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -q && apt-get install -qy \
    texlive-full

# RUN apt-get install -qy curl

# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# ENV NVM_DIR "/root/.nvm"

# RUN "$NVM_DIR/nvm.sh"

EXPOSE 2500

ENTRYPOINT ["tail", "-f"]
