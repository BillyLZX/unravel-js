function sYob(obj, year){
	obj.year = year;
	obj={};
	obj.year=2001;
	console.log(obj.year);
}

var mE={};
sYob(mE,1988);
console.log(obj);

//如果我有一个变量不加var 他就是全局变量。无论在哪里定义都是全局变量

