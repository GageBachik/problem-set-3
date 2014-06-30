function firstReverse(string){
	console.log(string.split('').reverse().join(''));
}

function swapCase(string){
	var character = string.split('');
	var reversed = [];
	character.map(function(character){
		if (character === character.toUpperCase()){
			reversed.push(character.toLowerCase());
		}else{
			reversed.push(character.toUpperCase());
		}
	});
	console.log(reversed.join(''));
}

function letterCount(string){
	var runningCount = 0;
	var finalWord = '';
	var words = string.split(' ');
	words.map(function(value, index){
		var count = 0;
		var letters = value.split('');
		letters.filter(function(val, ind){
			if (letters.indexOf(val) !== ind){
				count += 1;
			}
		});
		if (count > runningCount){
			runningCount = count;
			finalWord = value;
		}
	});
	console.log(finalWord);
}