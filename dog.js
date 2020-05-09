function Dog(name){
	this.name = name;
	
}

Dog.prototype.bark = function(){
		console.log("gogogogogog");
}
var d1 = new Dog("pull");
d1.bark();