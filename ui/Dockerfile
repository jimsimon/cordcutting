FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install bower
RUN npm install polymer-cli

EXPOSE 8081

CMD polymer install && polymer serve --hostname 0.0.0.0
