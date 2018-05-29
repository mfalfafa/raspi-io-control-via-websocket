var socket = require('socket.io-client')('http://192.168.10.187:5000');
const Gpio = require('onoff').Gpio;
const sensor1 = new Gpio(2, 'in', 'rising', {debounceTimeout: 10});
const sensor2 = new Gpio(3, 'in', 'rising', {debounceTimeout: 10});

//Watch the value in input pin on raspi (rising edge detection)
sensor1.watch(function(err, value){
	if(value == 1){
		socket.emit("aaa","sensor 1 on");
	}
});
sensor2.watch(function(err, value){
	if(value == 1){
		socket.emit("aaa","sensor 2 on");
	}
});

//For receiving data
socket.on('data1', function (data) {
    console.log(data.toString());
});

//For checking
setTimeout(function(){
	socket.emit("aaa", "Hello");
}, 3000);