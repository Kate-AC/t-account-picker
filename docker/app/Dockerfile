FROM node:16-alpine3.14

RUN apk update \
  && apk upgrade \
  && apk add curl  \
  && apk add bash

ENV APP_ENV /projects/t-account-picker

RUN mkdir -p $APP_ENV

WORKDIR $APP_ENV
