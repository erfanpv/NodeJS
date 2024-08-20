const EventEmitter = require("events");

const MyEmitter = new EventEmitter();

MyEmitter.on("abc", (name = "SomeOne",sab) => {
  console.log(`event Ocuured from ${name} ${sab}`);
});

MyEmitter.emit("abc", "erfan","sss");
