function Mouse(name,age){
	this.name = name;
	this.age = age;
	this.isDead = false;
}

Mouse.prototype.die = function(){
	this.isDead = true;
}
// var m1 = new Mouse("jerry",10);

// console.log(m1);
module.exports = Mouse;