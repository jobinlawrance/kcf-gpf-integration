FROM node:8
MAINTAINER Jobin Lawrance <jobinlawrance@gmail.com>

# install deps
# ADD package.json 
RUN yarn install && npm run grunt && npm run start

# Copy deps
# RUN mkdir -p /opt/hello-world-app && cp -a /tmp/node_modules /opt/hello-world-app

# Setup workdir
WORKDIR ./
# COPY . /opt/hello-world-app

# run
EXPOSE 8080
CMD ["npm", "start"]