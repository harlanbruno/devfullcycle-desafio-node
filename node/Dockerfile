FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
    npm install express && \
    npm install mysql --SAVE

COPY . .

EXPOSE 3000

# Comando de inicialização
#CMD ["node", "index.js"]
