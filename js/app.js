var app = angular.module("shoppingCart", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl:'partials/about.html',
		controller: 'homeController'
	})
	.when('/contact', {
		templateUrl:'partials/contact.html',
		controller: 'homeController'
	})
	.when('/home', {
		templateUrl:'partials/home.html',
		controller: 'homeController'
	})
	.when('/cart', {
		templateUrl:'partials/cart.html',
		controller: 'cartController'
	})
})

//digest-tree