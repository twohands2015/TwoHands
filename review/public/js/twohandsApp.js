'use strict';
var twohands = angular.module('twohandsApp', ['ngRoute', 'ngResource']);
twohands.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'template/home.html', controller: 'homeCtrl'});
	$routeProvider.when('/login', {templateUrl: 'template/login.html', controller: 'loginCtrl'})
	$routeProvider.when('/terms', {templateUrl: 'template/terms.html', controller: 'termsCtrl'})
	$routeProvider.when('/signup', {templateUrl: 'template/signup.html', controller: 'signupCtrl'})
	$routeProvider.when('/sell', {templateUrl: 'template/sell.html', controller: 'sellCtrl'})
	$routeProvider.when('/userspace', {templateUrl: 'template/userspace.html', controller: 'userspaceCtrl'})
	$routeProvider.when('/market/:gettype', {templateUrl: 'template/market.html', controller: 'marketCtrl'})
	$routeProvider.when('/product/:productId', {templateUrl: 'template/product.html', controller: 'productCtrl'})
	$routeProvider.otherwise({redirectTo: '/'});
}]);