const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const Umzug = require('umzug')
const forceSSL = require('express-force-ssl')
const router = require('./router/router')
const env = process.env.NODE_ENV
const { sequelize } = require('./util/sequelize')

const app = express()
app.set('forceSSLOptions', {
  trustXFPHeader: true
})

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize
  }
})

app.use(morgan('combined'))
app.use(compression())

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
  if (req.get('User-Agent').includes('GoogleHC')) {
    res.send('API is healthy!')
  } else {
    res.sendStatus(403)
  }
})


if (env === 'development') {
  app.use('/api', router)
} else {
  app.use('/api', forceSSL, router)
}

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
