FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json ./
COPY src ./
COPY public ./
RUN npm install
COPY . ./
CMD ["npm", "build"]
CMD ["npm", "serve build"]