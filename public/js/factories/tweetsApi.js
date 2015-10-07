app.factory('tweetsApi', ['$http', function ($http) {

    getTimeline = function(count, fc) {
        $http({
            method: 'GET',
            url: "http://localhost:3000/timeline?count=" + count

        }).then(function successCallback(response) {
            fc(response);

        }, function errorCallback(response) {
        });
    },

    getMyPlace = function(latitude, longitude, fc) {
        $http({
            method: 'GET',
            url: "http://localhost:3000/myplace?lat=" + latitude + "&long=" + longitude

        }).then(function successCallback(response) {
            fc(response);

        }, function errorCallback(response) {
        });
    },

    getTrends = function(woeid, fc) {
        $http({
            method: 'GET',
            url: "http://localhost:3000/trends?id=" + woeid

        }).then(function successCallback(response) {
            fc(response);

        }, function errorCallback(response) {
        });
    },

    searchTrends = function(query, fc) {

        var finalQuery = query;

        if(query.match("#")){
            finalQuery = query.replace('#', '%23');
        }

        $http({
            method: 'GET',
            url: "http://localhost:3000/search?q=" + finalQuery

        }).then(function successCallback(response) {
            fc(response);

        }, function errorCallback(response) {
        });
    
    };

    return {
        getTimeline: getTimeline,
        getMyPlace: getMyPlace,
        getTrends: getTrends,
        searchTrends: searchTrends
    };
}]);