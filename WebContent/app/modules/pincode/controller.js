'use strict';

subsapp.controller('pincodeCtr',[
	'$scope',
	'$routeParams',
	'$location',
	function($scope,$routeParams,$location){

		$scope.submit = function(){
			$location.path('/confirm');
		};

	}
]);