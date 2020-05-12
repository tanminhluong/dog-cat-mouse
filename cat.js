var mouse = require('./mouse');
function Cat(name){
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(animal){
	if(animal instanceof mouse){
		this.stomach.push(mouse);
	}else{
		throw new Error('eat mouse only');
	}
	
}

// var tom = new Cat('Tom');
// console.log(tom);
module.exports = Cat;