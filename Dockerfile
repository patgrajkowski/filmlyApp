FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json ./
COPY src ./
COPY public ./
RUN npm install
RUN npm run build
COPY . ./
CMD ["npx", "serve"]