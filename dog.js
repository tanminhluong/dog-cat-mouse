var chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}
Dog.prototype.bark = function(){
		console.log("gogogogogog");
}
var d1 = new Dog("pull");
var d2 = new Dog("lucky");
d1.bark();
Dog.prototype.sayHi = function(){
	console.log('my name is ' + chalk.blue(this.name));
}
d1.sayHi();
module.exports = Dog;