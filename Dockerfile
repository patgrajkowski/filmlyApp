FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json /usr/src/frontendApp
COPY index.js /usr/src/frontendApp
COPY models /usr/src/frontendApp
COPY routes /usr/src/frontendApp
RUN npm install
COPY . .
CMD ["npm", "start"]