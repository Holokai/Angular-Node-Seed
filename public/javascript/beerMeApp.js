'use strict';
var beerMeApp = angular.module('beerMeApp',['ngResource'])
				.config(function($routeProvider){
					$routeProvider.when('/',{
						templateUrl:'templates/HomePage'
						
					});
					$routeProvider.when('/beers',{
						templateUrl:'templates/BeerList',
						controller:'BeerListController'
					});
					$routeProvider.when('/beers/:id',{
						templateUrl:'templates/Beer',
						controller:'BeerController'
					});
					$routeProvider.otherwise({
						redirectTo: '/'
					});

					$.cookie.settings = {
						path:'/',
						domain:'',
						expires:31
					}
				});