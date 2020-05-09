function Mouse(name,age){
	this.name = name;
	this.age = age;
	this.dead = false;
}

Mouse.prototype.die = function(){
	this.dead = true;
}
var m1 = new Mouse("jerry",10);

console.log(m1);
module.exports = Mouse;