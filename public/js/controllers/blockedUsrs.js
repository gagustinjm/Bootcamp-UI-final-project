app.controller('blockedUsrsCtrl', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {	

	$window.pageYOffset;

	$rootScope.title = "Blocked Users";
	$scope.users = ["@Agustin", "@Pedro", "@Pepino"];
	
}]);