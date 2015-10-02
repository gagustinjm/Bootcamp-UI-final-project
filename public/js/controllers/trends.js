app.controller('trendsCtrl', ['$scope', '$routeParams', 'tweetsApi', '$rootScope', '$location', '$window', 
	function ($scope, $routeParams, tweetsApi, $rootScope, $location, $window) {	

	$window.pageYOffset;
		
	$rootScope.title = "Trends";

	if($routeParams.woeid) {
		tweetsApi.getTrends($routeParams.woeid, function (response){
			if(response.data) {
				$scope.trends = response.data[0].trends;
			}	
		});	
	} else{
		$location.path('/views/home.html');
	}
		
}]);