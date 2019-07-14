# Build
FROM node:alpine as build

WORKDIR /app

COPY . /app

# Install app dependencies
RUN yarn

# Build of the app
RUN yarn build

# Run
FROM nginx

COPY nginx/default.conf /etc/nginx/nginx.conf

# Grab the build app from previous stage
COPY --from=build /app/build /var/www
