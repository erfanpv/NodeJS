const fs = require("fs");

console.log("Start");
try {
  const data = fs.readFileSync("fs/write.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log("End");
