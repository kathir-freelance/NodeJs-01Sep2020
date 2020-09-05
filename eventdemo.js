var event=require('events');
var eventEmitter=new event.EventEmitter();



//addListener
//on
//once
//removeListener
//removeAllListener
//emit
//setMaxListeners


//what event - who listens
//sayhi - Sayhi()

function sayHi(){
	console.log('hiiii......listener1');
}
function sayHi1(){
	console.log('hiiii......listener2');
}
function sayHello(){
	console.log('hello......listener for hello');
}
function meth(){
	console.log('common meth');
}

//eventEmitter.setMaxListeners(1);
//eventEmitter.on('hi',meth);

eventEmitter.once('hi',meth);

//eventEmitter.addListener('hi',sayHi1);
//eventEmitter.addListener('hello',sayHello);
eventEmitter.addListener('hello',meth);

eventEmitter.emit('hi'); //firing hi event
eventEmitter.emit('hi'); //firing hi event
eventEmitter.emit('hi'); //firing hi event

//eventEmitter.removeListener('hello');
eventEmitter.emit('hello'); //firing hello event




