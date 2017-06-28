const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Umzug = require('umzug')
const forceSSL = require('express-force-ssl')
const router = require('./router/router')
const env = process.env.NODE_ENV
const { sequelize } = require('./util/sequelize')

const app = express()
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize
  }
})

app.use(morgan('combined'))

if (env !== 'development') {
  app.use(forceSSL)
}

app.use('*', async function (req, res, next) {
  if (env === 'production') {
    return next()
  }

  try {
    const migrations = await umzug.pending()
    if (migrations && migrations.length > 0) {
      res.status(500).send("You have pending database migrations, please run them before continuing.")
    } else {
      next()
    }
  } catch (e) {
    next(e)
  }
})

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('API is healthy!')
})

app.use('/api', router)

app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.send(`
    <h1>Error Report</h1>
    <p>${err.message}</p>
    <p>${err.stack}</p>
  `)
})

const server = app.listen(3000, function () {
  console.log('API listening on port 3000!')
})

module.exports = server
