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