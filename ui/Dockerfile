FROM node:latest

RUN npm install -g polymer-cli
RUN npm install -g bower

WORKDIR /usr/src/app

EXPOSE 8081

CMD polymer install && polymer serve --hostname 0.0.0.0
