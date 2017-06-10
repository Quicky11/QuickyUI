'use strict';

subsapp.controller('pincodeCtr',[
	'$scope',
	'$routeParams',
	'$location',
	function($scope,$routeParams,$location){

		$scope.subscribe = function(){
			$location.path('/activatequicky');
		};

	}
]);