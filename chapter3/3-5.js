function double(num){
	num=num+num;
	return num;
}

var num1=5;
var num2=double(num1);
console.log(num1+" "+num2);

function double(obj){
	obj.name="change";
	return obj;
}

var obj1={};
obj1.name="heihei";
var obj2=double(obj1);
console.log(obj1.name+" "+obj2.name);