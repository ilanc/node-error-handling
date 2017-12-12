const fs = require('fs');

// try catch
try {
  throw new Error('boom');
} catch (e) {
  console.log('caught', e.message);
}

// callbacks
function readAndParse(file, callback) {
  fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
    if (err) return callback(err);
    var parsed;
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      return callback(e);
    }
    callback(null, parsed);
  });
}

// promises
new Promise(function (resolve, reject) {
  fs.readFile('data.txt', function (err, data) {
    if (err) return reject(err);
    resolve(data);
  });
})
  .then(parseJson)
  .then(doSomethingElse)
  .catch(function (err) {
    // handle readFile || parseJson || doSomethingElse rejection errors here
  });

// async/await
try {
  await somePromiseThatRejects();
} catch (e) {
  // e is the rejection error - handle it here
}

// eventemitters
var req = http.get(url, function (res) {
  doSomething(res);
});
req.on('error', function (err) {
  // handle err here
})

// express error middleware
app.post('/login', function (req, res, next) {
  db.query('SELECT ...', function (err, user) {
    if (err) return next(err);
  });
});

app.use(function (req, res, next, err) {
  // render error page, log error, etc ...
  next();
});