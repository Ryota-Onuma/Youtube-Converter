FROM node:14.15-alpine3.10

RUN apk add  --no-cache --update ffmpeg

WORKDIR /app

COPY . /app/

RUN yarn

EXPOSE 3000
CMD [ "npm", "start" ]