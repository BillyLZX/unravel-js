function car(make, tag, year){
	this.make=make;
	this.tag=tag;
	this.year=year;
}

var car1= new car("Ford","Fusion",1988);
var car2= new car("BMW","X5",2010);
console.log(car1+car2);