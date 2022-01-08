FROM node:16
WORKDIR /usr/src/frontendApp
COPY ./app/package.json /usr/src/frontendApp
COPY ./app/index.js /usr/src/frontendApp
COPY ./app/models /usr/src/frontendApp
COPY ./app/routes /usr/src/frontendApp
RUN npm install
COPY . .
CMD ["npm", "start"]