'use strict';

subsapp.controller('activateCtr',[
	'$scope',
	'$routeParams',
	'$location',
	function($scope,$routeParams,$location){

		$scope.verify = function(){
			$location.path('/pincode');
		};
	}
]);