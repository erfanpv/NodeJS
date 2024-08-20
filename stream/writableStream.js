const fs = require("fs");

const writableStream = fs.createWriteStream("./stream/output.txt");

writableStream.write("Writing some data to a file.\n");
writableStream.end("Finished writing.");

writableStream.on("finish", () => {
  console.log("Write operation complete.");
});

writableStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
