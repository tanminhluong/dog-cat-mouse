function Cat(name){
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}

var tom = new Cat('Tom');
console.log(tom);
module.exports = Cat;