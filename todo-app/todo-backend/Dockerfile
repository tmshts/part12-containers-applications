FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

# RUN npm install
RUN npm ci

# CMD DEBUG=play:* npm start
ENV DEBUG=todo-app:*
CMD npm start