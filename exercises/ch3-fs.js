'use strict'

// Chapter 3 - File System Operations
// Topics: reading, writing, and appending files using the fs module

const fs = require('fs')
const path = require('path')

const tmpFile = path.join(__dirname, 'tmp-output.txt')

// 1. Write a file
fs.writeFile(tmpFile, 'Hello from Node.js fs module!\n', (err) => {
  if (err) throw err
  console.log('File written:', tmpFile)

  // 2. Append to the file
  fs.appendFile(tmpFile, 'Second line appended.\n', (err) => {
    if (err) throw err
    console.log('Content appended.')

    // 3. Read the file
    fs.readFile(tmpFile, 'utf8', (err, data) => {
      if (err) throw err
      console.log('File contents:\n' + data)

      // 4. Delete the temp file
      fs.unlink(tmpFile, (err) => {
        if (err) throw err
        console.log('Temp file deleted.')
      })
    })
  })
})
