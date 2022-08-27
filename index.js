const logEvents = require("./logEvents");

const EventEmitter = require("events");

// define emitter class
class MyEmitter extends EventEmitter {}

// create instance of MyEmiiter class
const myEmitter = new MyEmitter();

// add listener
myEmitter.on("log", (message) => logEvents(message));

// setTimeout added just to make the emission more observable... cool, right? lol
setTimeout(() => {
  // emit log event
  myEmitter.emit("log", "Log event emitted");
}, 3000);
