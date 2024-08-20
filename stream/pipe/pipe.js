const fs = require('fs');

// Create a readable stream from input.txt
const readableStream = fs.createReadStream('./stream/pipe/input.txt');

// Create a writable stream to output.txt
const writableStream = fs.createWriteStream('./stream/pipe/output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Optional: Handle events
readableStream.on('end', () => {
  console.log('File reading completed.');
});

writableStream.on('finish', () => {
  console.log('File writing completed.');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
