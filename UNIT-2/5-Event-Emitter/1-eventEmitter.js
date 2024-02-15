const Even = require('events');
var eventEmitter = new Even();
eventEmitter.on('grade', (err, msg) =>{
    console.log(msg);
});
eventEmitter.emit('grade', "First event");