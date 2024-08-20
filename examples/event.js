const event = require("events");

// const Eventemitter = new event();

// Eventemitter.on("click", (data) => {
//   console.log("click triggerd", data);
// });

// Eventemitter.emit("click","erfan");

class Eventemitter extends event {
  constructor() {
    super();
  }

  domSomething() {
    console.log("do somthing");
    this.emit("event", "somedata");
  }
}

module.exports = Eventemitter;
