const fs = require("fs");

// Create a readable stream from a file
const readableStream = fs.createReadStream("./fs/write.txt");

// Event handlers
readableStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on("end", () => {
  console.log("Finished reading the file.");
});

readableStream.on("error", (err) => {
  console.error("Error reading the file:", err);
});
