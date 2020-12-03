FROM node:13.10.1-alpine

RUN mkdir -p /srv/app/backend
WORKDIR /srv/app/backend


COPY . /srv/app/backend/

RUN npm install


CMD  npm start