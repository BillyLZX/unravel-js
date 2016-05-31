var num = 123;
var globalNum = 12;

console.log("outer num", num);
useNum();
console.log("outer num", num);

function useNum(){
	var num = 24;
	console.log("globalNum"+globalNum);
	console.log("inner num"+num);
}