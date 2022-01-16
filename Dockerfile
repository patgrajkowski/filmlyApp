FROM node:16
WORKDIR /usr/src/frontendApp
COPY package.json ./
COPY src ./
COPY public ./
RUN npm install
COPY . ./
RUN npm run build
COPY . ./
CMD ["npx", "serve build"]