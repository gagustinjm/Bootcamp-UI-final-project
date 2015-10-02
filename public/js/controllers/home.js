app.controller('homeCtrl', ['$scope', '$rootScope', 'tweetsApi', 'tweets', '$window', 
	function ($scope, $rootScope, tweetsApi, tweets, $window) {

	$window.pageYOffset;

	$rootScope.title = "Home";

	/* ---------------------------------------- GEOLOCATION ---------------------------------------------- */
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        console.log("Geolocation is not supported by this browser.");
	    }
	}
	
	function showPosition(position) {
	    latitude = position.coords.latitude; 
	    longitude = position.coords.longitude;

	    tweetsApi.getMyPlace(latitude, longitude, function (response){
			$rootScope.myPlace = response.data;
		});
	}

	/* ----------------------------------------- TIMELINES ---------------------------------------------- */
	tweetsApi.getTimeline(50, function (response){
		$scope.tweets = response.data;

		// Working with date to use angular date filter
		for (t in $scope.tweets) {
			var date = new Date();		
			date = Date.parse($scope.tweets[t].created_at);
			$scope.tweets[t].aDate = date;
			$scope.tweets[t].tweetTime = moment($scope.tweets[t].aDate).fromNow();
		} // end for

		tweets.saveTweets($scope.tweets);
	});

	getLocation();

}]);
