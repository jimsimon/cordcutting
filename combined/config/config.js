module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "cordcutting",
    "host": "db",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "port": process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "database": "cordcutting",
    "dialect": "postgres"
  }
}
