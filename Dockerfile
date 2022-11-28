 FROM node:latest
 WORKDIR app
 COPY package.json . 
 RUN npm install
 COPY index.js .
 EXPOSE 3001
 ENV PORT 3001
 CMD node index.js
