const EventEmitter = require('events');
const event = new EventEmitter();

/* event.on('sayMyName', () => {
    console.log("Your name is Md!!!");
}); */
// Multiple  emetting event with one emitter 
/* event.on('sayMyName', () => {
    console.log("Your name is Nadeem!!!");
});

event.on('sayMyName', () => {
    console.log("Your name is Sarwar!!!");
}); */


// Event Emit only once
event.emit('sayMyName');


// Event with callback parameters
event.on("checkPage", (statusCode, msg)=>{
    console.log(`status code is ${statusCode} and the page is ${msg}`);

})

event.emit("checkPage",200,"ok");
