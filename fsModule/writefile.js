const fs = require("fs");

fs.writeFile("./fsModule/file.txt", "hello world", (err) => {
  if (err) {
    console.log("not completed");
  } else {
    console.log("Succesfull");
  }
});

fs.readFile("./fsModule/file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error found", err);
  } else {
    console.log("success", data);
  }
});
