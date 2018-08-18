FROM node:8
MAINTAINER Jobin Lawrance <jobinlawrance@gmail.com>

# install deps
ADD package.json 
RUN npm install --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false) && npm run grunt
# Copy deps
# RUN mkdir -p /opt/hello-world-app && cp -a /tmp/node_modules /opt/hello-world-app

# Setup workdir
WORKDIR ./
# COPY . /opt/hello-world-app

# run
EXPOSE 8080
CMD ["npm", "start"]