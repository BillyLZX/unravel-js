function createOperation(op){
	if(op=="add"){
		return function(a,b){return a+b;};
	}else{
		return function(a,b){return a-b;};
	}
}

var opAdd=createOperation("add");
var opSub=createOperation("sub");

console.log(opAdd(3,5));
console.log(opSub(10,3));