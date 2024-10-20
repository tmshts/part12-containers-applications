FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

# RUN npm install
# in production mode
RUN npm ci

# CMD DEBUG=play:* npm start
ENV DEBUG=backend:*

USER node

CMD npm start