'use strict'

const awsServerlessExpress = require('aws-serverless-express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { app } = require('./app')

app.use(awsServerlessExpressMiddleware.eventContext())

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)
// const server = awsServerlessExpress.createServer(app
module.exports.handler = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context)
}

// module.exports.lambdaToWarm = function (event, context, callback) {
//   /** Immediate response for WarmUP plugin */
//   if (event.source === 'serverless-plugin-warmup') {
//     console.log('WarmUP - Lambda is warm!')
//     return callback(null, 'Lambda is warm!')
//   }
// }
