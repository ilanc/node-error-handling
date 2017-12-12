// https://www.youtube.com/watch?v=7G3C8Y5tzw4
try {
  setTimeout(function() {
    throw new Error('boom');
  }, 0);
} catch (e) {
  console.log('caught', e.message);
}