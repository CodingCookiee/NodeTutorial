// Can be usd to create custom events and to listen for them
//Can also listen for inbuilt events

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

// Register EventListeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit Events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error Handling
myEmitter.on('error', (err) => {
  console.log('An Error Occured', err);
});
// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'));
