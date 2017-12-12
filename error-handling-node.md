# Error handling in node

From: https://www.youtube.com/watch?v=7G3C8Y5tzw4

`try {} catch() {}` is not sufficient in node because of it's design (single threaded with event loop). Exceptions in async code get thrown at top-level - outside try-catch e.g. see
* sync-error-caught.js
* async-error-not-caught.js

error vs exception
* error = `new Error('blah')` = just a value, has `.message` and `.callstack`
* exception = `throw x` = multi-level return, x can be any value e.g. an error

[Three principles](https://speakerdeck.com/lewisjellis/robust-error-handling-in-node-dot-js)
1. always know when errors happen
2. handle what you can, avoid what you can't
3. don't keep running in an unknown state

Links
* https://www.youtube.com/watch?v=7G3C8Y5tzw4
* https://speakerdeck.com/lewisjellis/robust-error-handling-in-node-dot-js
* https://sentry.io/for/node
* https://www.joyent.com/node-js/production/design/errors
* https://nodejs.org/api/errors.html

## Solutions
1. mechanisms = know all error handling patterns
2. global catch-all
3. use process manager = allow shutdown and restart
4. shutdown on fatal error

### 1. Mechanisms
1. try/catch - throw and try catch
2. callbacks - err argument `if (err) { .. }`
3. promises - `reject(err)` and `.catch()`
4. async/await - with `try/catch`
5. event emitters - error events and `.on('error')`
6. express - `next(err)` and error-handling middleware

see `mechanisms.js`

### 2. global catch-all

see `global-catch-all.js`

### 3. Process managers
* systemd
* pm2
* forever
* naught

### 4. Shutdown

see `shutdown.js`