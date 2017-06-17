FROM node:latest

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
RUN npm install -g bower
RUN ./node_modules/.bin/polymer install
RUN ./node_modules/.bin/polymer build

EXPOSE 8081

CMD ./node_modules/.bin/polymer serve --hostname 0.0.0.0
