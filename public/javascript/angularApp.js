'use strict';
var angularApp = angular.module('angularApp',['ngResource','ngRoute'])
				.config(function($routeProvider){
					$routeProvider.when('/',{
						templateUrl:'templates/HomePage'
						
					});
					$routeProvider.otherwise({redirectTo:'/'});

					$.cookie.settings = {
						path:'/',
						domain:'',
						expires:31
					}
				});