process.on('uncaughtException', function (err) {
  console.log('uncaught exception');
  console.error(err);
  process.exit(1);
})