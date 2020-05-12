var Cat = require('./cat');
var Mouse =require('./mouse');
var Dog = require('./dog');

var cat = new Cat();
var mouse = new Mouse('mickey');
var dog = new Dog();
try{
	cat.eat(dog);
}catch(error){
	console.log('error while cat eat dog');
}

console.log(cat);