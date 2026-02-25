'use strict'

// Chapter 4 - HTTP Server
// Topics: creating an HTTP server with the built-in http module

const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello from Node.js HTTP server!\n')
  } else if (method === 'GET' && url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Hello, World!', timestamp: Date.now() }))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found\n')
  }
})

server.listen(PORT, () => {
  console.log(`HTTP server listening on http://localhost:${PORT}`)
  console.log('Routes:')
  console.log('  GET /       - plain text response')
  console.log('  GET /json   - JSON response')
  console.log('Press Ctrl+C to stop the server.')
})
