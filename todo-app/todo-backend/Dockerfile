FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

# RUN npm install
RUN npm ci

# CMD DEBUG=play:* npm start
ENV DEBUG=todo-backend:*

USER node

CMD npm start