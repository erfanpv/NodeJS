const zlib = require("zlib");
const fs = require("fs");

// Create a readable stream from input.txt
const readable = fs.createReadStream("./stream/zlib/input.txt");

// Create a writable stream to output.txt.gz (compressed file)
const writable = fs.createWriteStream("./stream/zlib/output.txt.gz");

// Pipe the readable stream through zlib's compression stream to the writable stream
readable.pipe(zlib.createGzip()).pipe(writable);

// Handle events and errors (optional)
readable.on("end", () => {
  console.log("File reading completed.");
});

writable.on("finish", () => {
  console.log("File compression completed.");
});

readable.on("error", (err) => {
  console.error("Error reading file:", err);
});

writable.on("error", (err) => {
  console.error("Error writing compressed file:", err);
});
