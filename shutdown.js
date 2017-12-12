// Big combined example
// - graceful shutdown - drain connections, log error
// - notify pm

server = http.createServer(..);

function reportError(err, cb) {
  console.error(err);
  // Log to db, notify service e.g. sentry.io =
  //Raven.captureException(err, cb);
}

function shutdownGracefully(err, cb) {
  // stop receiving new connections, cleanup resources
  server.close(function() {
    // drain existing: server._connections
    reportError(err, cb);
  });
}

process.on('uncaughtException', function (err) {
  process.send('offline'); // tell PM
  shutdownGracefully(err, function () {
    process.exit(1);
  });
});

server.listen(80, function() {
  if (process.send) process.send('online'); // tell PM
})