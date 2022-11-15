#!/usr/bin/env node

/**
 * Module dependencies.
 */
// ES5 👇
// const app = require('../app');
// ES6 👇
import http from 'http';
import app from '../app';
import debug from '../services/debugLogger';
import configKeys from '../config/configKeys';
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(configKeys.port);
app.set('port', port);

/**
 * Create HTTP server.
 */

// app es una funcion de tipo middleware (codigo intermediario)
// (req, res) =>{ ...res.send("algo") }
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? ` pipe + ${addr}` : ` port + ${addr.port}`;
  debug(`💫 Listening on http://localhost:${port}`);
}
