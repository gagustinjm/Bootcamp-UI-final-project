app.controller('tweetDetailsCtrl', ['$scope', '$routeParams', 'tweets', '$rootScope', '$location', '$window',
	function ($scope, $routeParams, tweets, $rootScope, $location, $window) {

	$window.pageYOffset;	

	$rootScope.title = "Tweet Details";
	
	if(tweets.getTweet($routeParams.tweetId)) {
		$scope.tweetToShow = tweets.getTweet($routeParams.tweetId);
	} else{
		$location.path('/views/home.html');			
	}	
}]);
