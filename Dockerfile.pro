FROM registry.gitlab.com/particle4dev/docker-node:node-8.9.3-dumb-1.2.1
MAINTAINER Hoang Nam "particle4dev@gmail.com"
LABEL description="This is dockerfile for building production images"

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
COPY ./build /usr/src/app/build/
COPY ./public /usr/src/app/public/
COPY ./server /usr/src/app/server/

COPY next.config.js package.json package-lock.json yarn.lock server.js /usr/src/app/

# Install Node.js dependencies
RUN yarn install --production --no-progress

EXPOSE 4000
CMD [ "npm", "start" ]
