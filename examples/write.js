const fs = require("fs");

fs.writeFile("./examples/write.txt", "Helloo world", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Write successsfullX");
  }
});

fs.readFile("./examples/write.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("read failed", err);
  } else {
    console.log(data);
  }
});
