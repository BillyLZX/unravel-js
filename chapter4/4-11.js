var setName = function(){
	return "newName";
};

//function setName(){

//}

console.log(typeof setName);

var str = setName();
setName.year = 1988;
console.log(setName);
console.log(setName.year);