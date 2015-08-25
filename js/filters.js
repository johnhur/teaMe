app.filter('catty', function(){

	return function(input, catty){
		var answer = []
		if (!input || !input.length) { return; }
		input.forEach(function(x){
			x.categories.forEach(function(y){
				if (y == catty) {
					answer.push(x);
					input = answer
				}
			});
		});
		return input;
	}
});

app.filter('cur', function(){
	return function(input){
			var dollars = input.toString()
			var cents = dollars.slice(-2);
			var Dollars = dollars.slice(0, -2)
			input = "$" + Dollars + "." + cents
		return input
	}
})