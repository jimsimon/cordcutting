const chokidar = require('chokidar');
const invalidate = require('invalidate-module');
const path = require('path');

let server = require('./app')

// Watch for file changes and reload the server
chokidar.watch('.', {
  ignoreInitial: true,
  ignored: [/(^|[\/\\])\../, '**/node_modules/**']
}).on('change', (event, filepath) => {
  console.log('Change detected -- reloading server')
  const absFilename = path.resolve(filepath);
  invalidate(absFilename);
  server.close(() => {
    server = require('./app')
  })
});

