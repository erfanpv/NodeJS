const myEmitter = require("./EventEmitter");

const emitter = new myEmitter();

emitter.on("click", (data,dd) => {
  console.log("Clciked Worked", data,dd);
});

emitter.emit("click","hellooooo",'aa');
