# HackerNews project - Group 7

## Table of Contents  
[Group members](#group-members)  
[How to run the project](#how-to-run-the-project)
[Tool stack](#tool-stack)  
[CI/CD pipeline](#ci/cd-pipeline)  
[Database schema](#database-schema)  

## Group members

| Member     | Email address            |
|------------|--------------------------|
| Plamen     | plamengetsov95@gmail.com |
| Florent    | kryptag@gmail.com        |
| Edmond     | edipetres@gmail.com      |
| Emil       | emilklausen2@hotmail.com |
| Zygimantas | pr.zygimantas@gmail.com  |

## How to run the project

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

## Tool stack

| Service         | Tool                   | Comment                                           |
|-----------------|------------------------|---------------------------------------------------|
| Frontend        | Vue.js                 |                                                   |
| Backend         | Node.js, Express.js |                                                   |
| CI/CD pipeline  | CircleCI               | https://circleci.com/gh/edipetres/HackerNewsG7    |
| Version Control | Github                 | https://github.com/edipetres/HackerNewsG7         |
| Deployment      | Digital Oceal          | Both back and front-end lives in the same project |
| Database        | Mongodb                | https://mlab.com/                                 |

## CI/CD pipeline

See pipeline in CircleCI [here](https://circleci.com/gh/edipetres/HackerNewsG7)

1. [x] Checkout code from Github
2. [ ] Run tests
3. [ ] Build production code
4. [ ] Deploy to Digital Ocean
5. [ ] Release version on Github? - we haven't decided if we want to do this manually, or to be part of the pipeline.

## Database schema

We drafted the following sketch for the database schema for our MongoDB.

![db sketch](/docs/db-schema-sketch.jpeg)