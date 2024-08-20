const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  doSomething() {
    console.log("Doing Something........");
    this.emit("event", "some data");
  }
}

module.exports = MyEmitter;
