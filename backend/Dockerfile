FROM node:16.14.2-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install  dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]