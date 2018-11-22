FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN apk add --update nginx python && rm -rf /var/cache/apk/*
# RUN mkdir -p /tmp/nginx/client-body
# RUN nginx -v

# RUN npm run build:prod

COPY /dist .

RUN --name mynginx -P -d -v . nginx

EXPOSE 8080

# RUN npm run build:prod

CMD ["nginx", "-g", "daemon off;"]
