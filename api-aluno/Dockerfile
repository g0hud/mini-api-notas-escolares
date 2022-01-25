FROM node:16.13-alpine

RUN mkdir -p /usr/app/node_modules && chown -R node:node /usr/app

WORKDIR /usr/app

COPY package*.json ./

COPY .env .

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 8081

CMD ["npm", "start"]
