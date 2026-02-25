'use strict'

// Chapter 2 - Asynchronous Programming
// Topics: callbacks, promises, async/await

// 1. setTimeout callback
console.log('Start')

setTimeout(() => {
  console.log('Callback: fired after 100ms')
}, 100)

// 2. Promise
const waitPromise = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms))

waitPromise(50)
  .then((ms) => console.log(`Promise resolved after ${ms}ms`))
  .catch((err) => console.error('Promise error:', err))

// 3. async/await
async function fetchData () {
  const result = await waitPromise(25)
  console.log(`Async/await: resolved after ${result}ms`)
  return result
}

fetchData().then((val) => console.log('fetchData returned:', val))

console.log('End of synchronous code')
