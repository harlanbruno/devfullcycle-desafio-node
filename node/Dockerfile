FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
    npm install express --save-dev && \
    npm install mysql --SAVE

COPY . .

EXPOSE 3000

RUN chmod -R 777 /root

#CMD ["npm", "install"]
CMD ["node", "index.js"]
