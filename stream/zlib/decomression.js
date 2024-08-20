const zlib = require("zlib");
const fs = require("fs");

// Create a readable stream from input.txt.gz (compressed file)
const readable = fs.createReadStream("./stream/zlib/output.txt.gz");

// Create a writable stream to output.txt (decompressed file)
const writable = fs.createWriteStream("./stream/zlib/output.txt");

// Pipe the readable stream through zlib's decompression stream to the writable stream
readable.pipe(zlib.createGunzip()).pipe(writable);

// Handle events and errors (optional)
readable.on("end", () => {
  console.log("File reading completed.");
});

writable.on("finish", () => {
  console.log("File decompression completed.");
});

readable.on("error", (err) => {
  console.error("Error reading compressed file:", err);
});

writable.on("error", (err) => {
  console.error("Error writing decompressed file:", err);
});
