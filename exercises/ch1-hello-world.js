'use strict'

// Chapter 1 - Introduction to Node.js
// Topics: globals, process object, module system

// 1. Hello World
console.log('Hello, World!')

// 2. Node.js globals
console.log('Node version:', process.version)
console.log('Platform:', process.platform)
console.log('Current directory:', process.cwd())

// 3. Command line arguments
const args = process.argv.slice(2)
if (args.length > 0) {
  console.log('Arguments:', args.join(', '))
} else {
  console.log('No command line arguments provided.')
  console.log('Try: node ch1-hello-world.js <your name>')
}

// 4. Environment variables
const greeting = process.env.GREETING || 'Hello'
console.log(`${greeting} from Node.js!`)
