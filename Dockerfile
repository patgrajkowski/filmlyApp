FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json ./
COPY src ./
COPY public ./
RUN npm install
COPY . ./
CMD ["npm", "run build"]
CMD ["npx", "serve build"]