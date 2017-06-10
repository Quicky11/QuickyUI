'use strict';


subsapp.config(['$routeProvider',function($routeProvider){

	$routeProvider.when('/',{
		templateUrl:'modules/subscribe/view.html',
		controller:'subscribeCtr',
		title:'subscribe'
	});
	$routeProvider.when('/activatequicky',{
		templateUrl:'modules/activatequicky/view.html',
		controller:'activateCtr',
		title:'activateIBAN'
	});
	$routeProvider.when('/pincode',{
		templateUrl:'modules/pincode/view.html',
		controller:'pincodeCtr',
		title:'pincode'
	});

}]);