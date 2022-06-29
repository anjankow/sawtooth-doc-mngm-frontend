FROM node:17.9
WORKDIR /home/app

COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install --location=global serve

COPY public ./public
COPY src ./src

RUN npm run build


EXPOSE 8080
CMD ["serve",  "-s", "build", "-l", "8080"]
