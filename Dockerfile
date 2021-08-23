# Base image
FROM node:alpine

# Create destination folder with non root default user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Change work directory
WORKDIR /home/node/app

# Copy files to the container
COPY ./Black-Hat/backend /home/node/app/

# install node dependencies with npm
RUN npm install

# start command
CMD ["npm", "start"]