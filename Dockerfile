FROM node:latest
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 9090
CMD [ "npm", "start" ]