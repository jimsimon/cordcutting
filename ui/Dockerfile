FROM node:latest

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
RUN npm install -g bower
RUN ./node_modules/.bin/polymer install
RUN ./node_modules/.bin/polymer build

EXPOSE 8080

CMD npm start
