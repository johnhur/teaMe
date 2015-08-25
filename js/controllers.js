app.controller("homeController", ['$scope', '$routeParams', '$http', 'Baggy', function($scope, $routeParams, $http, Baggy){
	$scope.bag = Baggy.baggy;
	$scope.cartNum = 0;
	$scope.qty = "1";

	$http.get('js/tea.json').then(function(data){
		$scope.data = data;
	})

	$scope.toBag = function(){
		console.log(this.d)
		this.d.quantity = this.qty;
		Baggy.baggy.push(this.d);
		$scope.cartNum += parseInt(this.d.quantity);
	}
}])

app.controller("cartController", ['$scope', '$routeParams', '$http', 'Baggy', function($scope, $routeParams, $http, Baggy){
	$scope.bag = Baggy.baggy;
	
	$scope.total = 0;

	$scope.bag.forEach(function(x){
		$scope.total += (x.quantity * x.price)
		x.editTeaNum = false;
	})

	$scope.totalAmount = function(){
		var tAmount = 0
		$scope.bag.forEach(function(x){
			tAmount += (x.quantity * x.price)
		})
		$scope.total = tAmount
	}

	$scope.editQ = function(){
		this.tea.editTeaNum = true;
		console.log(this.tea)
	}

	$scope.saveQ = function(){
		this.tea.quantity = this.newQ
		this.tea.editTeaNum = false;
		$scope.totalAmount();
	}

	$scope.removeTea = function(){
		console.log(this.tea)
		var id = $scope.bag.indexOf(this.tea)
		$scope.bag.splice(id, 1);
		$scope.totalAmount();
	}

	// $http.get('/js/tea.json').then(function(data){
	// 	$scope.data = data
	// })

	// $scope.toBag = function(){
	// 	Baggy.baggy.push(this.d)
	// 	console.log(Baggy.baggy)
	// }

}])

