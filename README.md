<h3 align="center"> 
    API NodeJS + Express + PostGree + Knex
<h3>
<br>

## Overview

- **[nodejs](https://nodejs.org/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Knex](http://knexjs.org/)**

```bash
### Install dependencies
npm init -y
npm install express pg pg-hstore knex
npm install --save-dev nodemon dotenv

### Postgres
docker-compose.exe exec db bash
psql -U docker
CREATE DATABASE knex_teste;
\l

### Knex
npx knex init
npx knex migrate:make create_table_users
npx knex migrate:latest
npx knex seed:make 001_users
npx knex seed:run
```