const myEmitter = require("./event");

const newEmiter = new myEmitter();

newEmiter.on("click", () => {
  console.log("click triggerd");
});

newEmiter.emit("click");
