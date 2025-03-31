FROM node:lts-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install
COPY --chown=node:node . .

ARG APP_PORT=3000
EXPOSE ${APP_PORT}

CMD ["npm", "run", "dev"]