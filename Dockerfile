#FROM node:16-alpine as builder
#
#WORKDIR /node
#COPY package.json .
#RUN npm install
#
#FROM node as app
#
#WORKDIR /app
#COPY --from=builder /node/node_modules .
#COPY . .
#
#CMD ["npm", "run", "prod"]

FROM node:14-alpine
WORKDIR /usr/src/app
RUN apk add curl
COPY package*.json ./
RUN npm i -y
COPY . .
ENV	USE_PROFILE dev
CMD ["sh", "-c", "npm run $USE_PROFILE"]
