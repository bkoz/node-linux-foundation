# node-linux-foundation
Running through the Linux Foundation JavaScript Course

## Course Exercises

| Chapter | Topic | File |
|---------|-------|------|
| 1 | Hello World & Node.js Globals | `exercises/ch1-hello-world.js` |
| 2 | Asynchronous Programming | `exercises/ch2-async.js` |
| 3 | File System Operations | `exercises/ch3-fs.js` |
| 4 | HTTP Server | `exercises/ch4-http.js` |
| 5 | Error Handling | `exercises/ch5-errors.js` |

## Running Exercises

```bash
# Run individual chapters
npm run ch1
npm run ch2
npm run ch3
npm run ch4   # starts an HTTP server on port 3000
npm run ch5

# Run all exercises (except HTTP server)
npm test
```
