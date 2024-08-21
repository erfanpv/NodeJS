const fs = require("fs");

fs.mkdir("newData", (err) => {
  if (err) {
    console.log("error occured", err);
  } else {
    console.log("Success");
  }
});

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./newData/file${i}`, `This is file ${i}`, (err) => {
    if (err) {
      console.log("error occcured", err);
    } else {
      console.log("succes all");
    }
  });
}

// for (let i = 1; i <= 10; i++) {
//   try {
//     const data = fs.readFileSync(`./newData/file${i}`, 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.log('Error occurred:', err);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   fs.readFile(`./newData/file${i}`, "utf-8", (err, data) => {
//     if (err) {
//       console.log("error occcured", err);
//     } else {
//       console.log(data);
//     }
//   });
// }
