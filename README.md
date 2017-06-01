# Cordcutting

## Developing

### Architecture
* Docker (containerization and deployments)
* Postgres (database)
* Node.js 7.10.0+ (API runtime)
* NPM 5.0.0+ (API package manager)
* Express.js (API middleware framework)
* Sequelize.js (API ORM library)
* Polymer (UI framework)
* Bower (UI package manager)

### Prerequisites
The only prerequisite is Docker.  Once installed, all commands can be executed through the various Docker containers.

#### Initialize and Seed Postgres
These commands only need to be executed once on a clean database:
1. Create Tables: `docker-compose run --rm api npm run sequelize db:migrate`
2. Insert Data: `docker-compose run --rm api npm run sequelize db:seed:all`

The database port is mapped to your host machine via Docker Compose so feel free to use your favorite database tools to poke around inside of it.

### Install Dependencies
1. API: `docker-compose run --rm api npm install`
2. UI: Coming soon, for now just bower install locally

### Running
1. `docker-compose up`
2. Navigate to the desired URL in your favorite web browser:
   * UI URL: http://ui.cordcutting.docker
   * API URL: http://api.cordcutting.docker

### Useful Commands

#### Stop, Rebuild, and Start the database
This one comes in handy when messing around with Sequelize stuff

`docker-compose stop db; docker-compose rm db; docker-compose run --rm api npm run sequelize db:migrate; docker-compose run --rm api npm run sequelize db:seed:all; docker-compose start db`

### Testing
There aren't any tests yet but we'll have some soon!

