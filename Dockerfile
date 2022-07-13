FROM node:17.9 as build
WORKDIR /home/app

COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY public ./public
COPY src ./src
COPY cert ./cert

RUN npm run build

FROM node:17.9 as production

RUN npm install --location=global serve
COPY --from=build /home/app/build /home/app/build

EXPOSE 8080
CMD ["serve",  "-s", "/home/app/build", "-l", "8080"]
