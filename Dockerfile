FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8090
CMD [ "npm", "start" ]