FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i lerna -g --loglevel notice
RUN npm install copyfiles -g

COPY yarn.lock ./

RUN yarn install

COPY . /usr/src/app

RUN lerna bootstrap

RUN yarn build
RUN npx prisma generate --schema ./packages/graphqlServer/prisma/schema.prisma

EXPOSE 4000

CMD ["node", "packages/graphqlServer/dist/index.js"]