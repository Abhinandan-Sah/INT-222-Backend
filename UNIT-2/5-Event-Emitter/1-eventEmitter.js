const Even = require('events');
var eventEmitter = new Even();
eventEmitter.on('grade', (err, msg) =>{
    console.log(msg);
});
eventEmitter.emit('grade', "First event");

//removing events
const EventEmitter = require('events');
var eventEmitter = new EventEmitter;
var exa1 = (msg) =>{
    console.log("you message1 "+ msg);
}