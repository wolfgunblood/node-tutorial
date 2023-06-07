const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`data received ${name} with id: ${id}`);
})

customEmitter.on("response", () => {
    console.log(`some other logic here`);
})

customEmitter.emit("response", "john", 34);