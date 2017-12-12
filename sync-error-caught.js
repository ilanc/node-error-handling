// https://www.youtube.com/watch?v=7G3C8Y5tzw4
try {
  throw new Error('boom');
} catch (e) {
  console.log('caught', e.message);
}