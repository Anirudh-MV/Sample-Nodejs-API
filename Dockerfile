FROM node:12.20.1-alpine3.12

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install pm2 -g

COPY . .
CMD ["pm2-runtime", "app.js"]

EXPOSE 8080

