'use strict';

subsapp.controller('subscribeCtr',[
	'$scope',
	'$routeParams',
	'$location',
	function($scope,$routeParams,$location){

		$scope.subscribe = function(){
			$location.path('/activatequicky');
		};

	}
]);