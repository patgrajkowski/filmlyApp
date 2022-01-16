FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json ./
COPY src ./
COPY public ./
RUN npm install && npm run build
COPY . ./
CMD ["npx", "serve"]