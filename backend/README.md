# Backend

## Getting started

This project is written in Typescript.

### Install

`yarn`

### Run (in development)

`yarn start:dev` will compile Typescript files to Javascript and start the app.
`yarn start:watch` will recompile the app whenever a file changes and restart the app.

## Deploy

### Build container

`docker build -t le-killer/backend .`

### Run container

`docker run --name backend -p 3000:3000 --env-file .env -it le-killer/backend`
