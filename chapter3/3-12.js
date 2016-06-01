var input ="peng shuo";
var i = 1234;

function jiami(){
	var tag = "|";
	function kaishijiami(input){
		var result = "";
		for(i = 0; i < input.length; i++){
			result+=input.charAt(i)+tag;
		}
		return result;
	}

	input = kaishijiami(input);
}

console.log(input, i);

jiami();
console.log(input, i);