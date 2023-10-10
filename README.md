# transmission

A notification preference center API for newsletter and reoccuring communications to subscription based systems.


Technology Used:

Express, TypeScript, TypeORM, PostgreSQL, Docker, Docker-Compose, Jest, Supertest

## Getting Started

### Prerequisites

Make sure to install the dependancies before trying to start the api. 

You will need to install Docker for a quick start.

- [Docker](https://docs.docker.com/get-docker/)

### Installation

#### Starting The API

Start the API using the start command. 

```
docker build -t transmission . 
docker run transmission npm ci && npm run start
```

when the server has successfully started you should see a message simular to below

```
App listening on the port 3000
```

<details>
  <summary>Advanced Usage</summary>

<h3>Setting Custom Port</h3>

<p>You can supply a different port by setting the Environment Variable `PORT` to your desired port.</p>

<h3>Production Build</h3>

<p>In production you will use a target distrobution build that will not include the devdependancies</p>

```bash
npm run build
npm run serve
```

</details>

## Documentation

The datastructure is outlined in the Documentation Folder under `datastructure.md` linked [here](/documentation/datastructure.md)

### Endpoints 

This is a RESTful api with several endpoints. 

There is an OpenAPI 3.0.0 spec in the Documentation Folder under `openapi.yaml` linked [here](/documentation/openapi.yaml)

## Testing

### Unit Tests

Unit tests are written using Jest and Supertest.




