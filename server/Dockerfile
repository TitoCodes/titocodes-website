FROM node:alpine3.12

WORKDIR /server
COPY package.json /server

RUN npm install

COPY . /server

EXPOSE 8081

CMD [ "npm", "run start" ]
