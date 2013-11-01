'use strict';
var angularApp = angular.module('angularApp',['ngResource'])
				.config(function($routeProvider){
					$routeProvider.when('/',{
						templateUrl:'templates/HomePage'
						
					});
					$routeProvider.when('/resource',{
						templateUrl:'templates/resourceList',
						controller:'ResourceListController'
					});

					$.cookie.settings = {
						path:'/',
						domain:'',
						expires:31
					}
				});