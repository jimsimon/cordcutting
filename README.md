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

### Install Dependencies
1. API: `docker-compose run --rm api npm install`

#### Initialize and Seed Postgres
These commands only need to be executed once on a clean database:
1. Create Tables: `docker-compose run --rm api npm run sequelize db:migrate`
2. Insert Data: `docker-compose run --rm api npm run sequelize db:seed:all`

The database port is mapped to your host machine via Docker Compose so feel free to use your favorite database tools to poke around inside of it.

### Running
1. `docker-compose up`
2. Navigate to the desired URL in your favorite web browser:
   * UI URL: http://ui.cordcutting.docker
   * API URL: http://api.cordcutting.docker

### Useful Commands

#### Use Bower via Docker
`docker-compose run --rm ui bower --allow-root <command>`

#### Stop, Rebuild, and Start the database
This one comes in handy when messing around with Sequelize stuff

`docker-compose stop db; docker-compose rm -f db; docker-compose run --rm api npm run sequelize db:migrate`

### Testing
There aren't any tests yet but we'll have some soon!

