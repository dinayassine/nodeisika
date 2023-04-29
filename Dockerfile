FROM node

WORKDIR /srv
COPY . .

RUN npm install

CMD ["node", "server.js"]
//test
