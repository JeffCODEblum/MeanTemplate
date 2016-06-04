var MyApp = angular.module("MyApp", ['ngRoute']).config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/page1', {templateUrl: 'page1.html', controller: 'page1Ctrl'})
		.when('/page2', {templateUrl: 'page2.html', controller: 'page2Ctrl'})
		.otherwise({redirectTo: '/'});
}]);

MyApp.controller('page1Ctrl', function($scope, $http) {
	$http.post('/page1').success(function(data) {
		$scope.message = data;
	});
});

MyApp.controller('page2Ctrl', function($scope, $http) {
	$http.post('/page2').success(function(data) {
		$scope.message = data;
	});
});