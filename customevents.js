var events=require('events')
var eventEmitter=new events.EventEmitter();
var MyFunc=function MyFunc1(){
	console.log("HI THERE ! HAPPY LEARNING")
}
eventEmitter.on("MyEvent",MyFunc)
eventEmitter.emit('MyEvent')