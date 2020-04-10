FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_PATH ./src
ENV DEBUG home-server

EXPOSE 3000

# CMD ["npm", "start"]
CMD ["node", "bin/www"]
