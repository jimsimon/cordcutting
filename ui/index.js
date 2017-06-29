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

app.get('/_health', function (req, res) {
  res.send('UI is healthy!')
})

if (env === 'development') {
  app.get('/*', prpl.makeHandler('./build', polymerConfig));
} else {
  app.get('/*', forceSSL, prpl.makeHandler('./build', polymerConfig));
}

app.listen(8080);
