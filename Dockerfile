FROM node:17.9 as build
WORKDIR /home/app

COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY public ./public
COPY src ./src
COPY cert ./cert

ENTRYPOINT ["npm", "start"]
