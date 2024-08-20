const fs = require("fs");

console.log("start");
fs.writeFile("fs/write.txt", "Helloo world", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written Successfully");
  }
});

fs.readFileSync("fs/write.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

fs.stat("fs/write.txt", (err, stats) => {
  if (err) throw err;
  console.log(`File size: ${stats.size} bytes`);
  console.log(`Last modified: ${stats.mtime}`);
});

console.log("End");
