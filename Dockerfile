FROM node:16
WORKDIR /usr/src/frontendApp
COPY ./app/package.json /usr/src/frontendApp
COPY ./app/src /usr/src/frontendApp
COPY ./app/public /usr/src/frontendApp
RUN npm install
COPY . .
CMD ["npm", "start"]