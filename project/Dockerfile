FROM node

COPY /my-project/package*.json /dockerTest

WORKDIR . /dockerTest

EXPOSE 8080

RUN npm install --save

CMD ["npm", "run"]