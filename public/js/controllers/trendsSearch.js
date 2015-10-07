app.controller('trendsSearchCtrl', ['$scope', '$routeParams', 'tweetsApi', 'tweets', '$rootScope', '$location', '$window',
	function ($scope, $routeParams, tweetsApi, tweets, $rootScope, $location, $window) {	

	$window.pageYOffset;
		
	$rootScope.title = "Trend Search";

	if($routeParams.tQuery) {
		tweetsApi.searchTrends($routeParams.tQuery, function (response){
			$scope.searchedTrends = response.data.statuses;

			// Working with date to use angular date filter
			for (t in $scope.searchedTrends) {
				var date = new Date();			
				date = Date.parse($scope.searchedTrends[t].created_at);
				$scope.searchedTrends[t].aDate = date;
				$scope.searchedTrends[t].tweetTime = moment($scope.searchedTrends[t].aDate).fromNow();
			} // end for

			tweets.saveTweets($scope.searchedTrends);
		});

	} else{
		$location.path('/views/home.html');
	}
	
}]);