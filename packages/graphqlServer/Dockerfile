FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install copyfiles -g
COPY yarn.lock ./

RUN yarn install

COPY . /usr/src/app

RUN yarn build
RUN npx prisma generate

EXPOSE 4000

CMD ["node", "dist/index.js"]