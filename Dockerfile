FROM node:10.10.0-alpine

WORKDIR /var/www/backend
COPY ./backend/package.json .
RUN npm install --quiet
COPY ./backend .