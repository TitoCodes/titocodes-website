FROM node:lts-alpine

WORKDIR /server
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8081

ENTRYPOINT npm run start