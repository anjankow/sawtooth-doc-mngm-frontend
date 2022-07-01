FROM node:17.9 as build
WORKDIR /home/app

COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY public ./public
COPY src ./src

RUN npm run build

FROM node:17.9 as production
WORKDIR /home/app

RUN npm install --location=global serve
COPY --from=build /home/app/build ./build

EXPOSE 8080
CMD ["serve",  "-s", "build", "-l", "8080"]
