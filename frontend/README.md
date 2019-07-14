# Frontend

## Getting started

This project was built using the `create-react-app` tool. It uses Typescript.

### Install

`yarn`

### Run (in development)

`yarn start`

## Deploy

### Build container

`docker build -t le-killer/frontend .`

### Run container

`docker run --name frontend -p 8000:80 -it le-killer/frontend`
