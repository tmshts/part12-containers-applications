FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .
#COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# CMD DEBUG=play:* npm start
ENV DEBUG=todo-backend:*

USER node

# npm run dev is the command to start the application in development mode
CMD npm run dev
#CMD ["npm", "run", "dev", "--", "--host"]
#CMD ["npm", "run", "dev"]