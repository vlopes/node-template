FROM node:12.18

RUN mkdir -p /src/app

WORKDIR /src/app

# Install dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "src/app.js" ]