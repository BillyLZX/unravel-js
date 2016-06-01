var num1 = Number(1);
var num2 = new Number(3);

console.log(num1);
console.log(num2);
var num3 = Number(null); // 输入字符之类的返回NAN

var num4 = Number(1/0); //返回infinity 负的话是-infinity