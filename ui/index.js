const prpl = require('prpl-server')
const express = require('express')
const morgan = require('morgan')
const forceSSL = require('express-force-ssl')
const env = process.env.NODE_ENV
const polymerConfig = require('./build/polymer.json')

const app = express()
app.set('forceSSLOptions', {
  trustXFPHeader: true
})

app.use(morgan('combined'))

app.use('/', function (req, res, next) {
  if (req.get('User-Agent').includes('GoogleHC')) {
    res.send('UI is healthy!')
  } else {
    next()
  }
})

if (env === 'development') {
  app.get('/*', prpl.makeHandler('./build', polymerConfig));
} else {
  app.get('/*', forceSSL, prpl.makeHandler('./build', polymerConfig));
}

app.listen(8080);
