# nodejs-simple-crud-api

## Install

```bash
npm install
```

## Run

`npm run start:dev` - to run application in development mode

`npm run start:prod` - to run application in production mode

`npm run start:multi` - to run application with horizontal scaling and load balancer

`npm run test` - to test application

# Scoring: CRUD API

## Basic Scope

- **+10** The repository with the application contains a `Readme.md` file containing detailed instructions for installing, running and using the application
- **+10** **GET** `api/users` implemented properly
- **+10** **GET** `api/users/${userId}` implemented properly
- **+10** **POST** `api/users` implemented properly
- **+10** **PUT** `api/users/{userId}` implemented properly
- **+10** **DELETE** `api/users/${userId}` implemented properly
- **+6** Users are stored in the form described in the technical requirements
- **+6** Value of `port` on which application is running is stored in `.env` file

## Advanced Scope
- **+30** Task implemented on Typescript 
- **+10** Processing of requests to non-existing endpoints implemented properly
- **+10** Errors on the server side that occur during the processing of a request should be handled and processed properly
- **+10** Development mode: `npm` script `start:dev` implemented properly
- **+10** Production mode: `npm` script `start:prod` implemented properly

## Hacker Scope
- **+30** There are tests for API (not less than **3** scenarios)
- **+50** There is horizontal scaling for application with a **load balancer**

## Score
202 / 202
