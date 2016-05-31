var obj1={};
obj1.name = "Shuo";
var obj2=obj1;
obj2.name = "Xiang";

console.log(obj1.name+","+obj2.name);

var str1="shuo";
var str2=str1; //string是不变的
str2 = "xiang";
console.log(str1+","+str2);