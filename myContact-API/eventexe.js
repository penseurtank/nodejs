const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

console.log("Welcome to events!!!!!!!");
// eventEmitter.on('start', () => {
//     console.log('started');
//   });

// eventEmitter.emit('start');


/**
 * 
 */
// let start;
// eventEmitter.on(start, (number) => {
//   console.log(`started ${number}`);
// });

// eventEmitter.emit(start, 23);

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  eventEmitter.emit('start', 1, 100);
  


