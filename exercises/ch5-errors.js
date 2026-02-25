'use strict'

// Chapter 5 - Error Handling
// Topics: error types, try/catch, error-first callbacks, unhandled rejections

// 1. Synchronous error handling with try/catch
function divide (a, b) {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

try {
  console.log('10 / 2 =', divide(10, 2))
  console.log('10 / 0 =', divide(10, 0))
} catch (err) {
  console.error('Caught sync error:', err.message)
}

// 2. Error-first callback pattern
function readConfig (filename, cb) {
  const fs = require('fs')
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) return cb(new Error(`Cannot read "${filename}": ${err.message}`))
    cb(null, data)
  })
}

readConfig('nonexistent.json', (err, data) => {
  if (err) {
    console.error('Callback error:', err.message)
    return
  }
  console.log('Config:', data)
})

// 3. Promise rejection handling
Promise.reject(new Error('Rejected promise'))
  .catch((err) => console.error('Caught promise rejection:', err.message))

// 4. async/await error handling
async function riskyOperation () {
  throw new Error('Something went wrong in async function')
}

async function main () {
  try {
    await riskyOperation()
  } catch (err) {
    console.error('Caught async error:', err.message)
  }
}

main()
