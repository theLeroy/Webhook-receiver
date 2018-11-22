FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# RUN npm run build:prod

CMD [ "npm", "run", "serve" ]
