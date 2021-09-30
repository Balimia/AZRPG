FROM alpine:latest
WORKDIR /app
COPY package.json /app
RUN apk add --update \
    && apk add --no-cache nodejs-current npm \
    && apk add --no-cache --virtual .build git curl build-base g++ \
    && npm install \
    && apk del .build
COPY . .
CMD ["npm", "start"]