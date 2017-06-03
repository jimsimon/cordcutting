FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g bower

EXPOSE 8081

CMD ./node_modules/.bin/polymer install && ./node_modules/.bin/polymer serve --hostname 0.0.0.0
