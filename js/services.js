app.factory('Baggy', function(){
	var Baggy = {}

	Baggy.baggy = [];

	Baggy.addTea = function(tea){
		Baggy.baggy.push(tea);
	}
	return Baggy;
})