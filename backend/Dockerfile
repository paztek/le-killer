# Build
FROM node:alpine as build

WORKDIR /app

COPY . /app

# Install app dependencies
RUN yarn

# Typescript compilation of the app
RUN yarn build

# Run
FROM node:alpine

WORKDIR /app

# Install app dependencies (only production)
COPY package.json /app
RUN yarn --prod

# Grab the built app from previous stage
COPY --from=build /app/dist /app/dist

CMD yarn start
