FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ts*.json ./
COPY public ./public
COPY src ./src

# RUN mkdir ./data
# RUN mkdir ./data/files

# COPY data/files ./data/files

ENV NODE_PATH ./src
ENV DEBUG home-server

EXPOSE 3000

CMD ["npm", "start"]
