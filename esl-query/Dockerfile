FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
RUN curl -sSL https://rover.apollo.dev/nix/v0.1.0 | sh
COPY ./ ./

CMD ["npm", "start"]