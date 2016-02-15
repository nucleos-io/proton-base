FROM node:argon

MAINTAINER l@hustling.me

ENV src /app/

RUN mkdir -p $src
WORKDIR $src
COPY . $src
RUN npm uninstall -g mocha
RUN npm uninstall -S mocha
RUN npm install --save-dev mocha-better-spec-reporter
RUN npm i -g mocha-co -S
RUN npm i

EXPOSE 8443
