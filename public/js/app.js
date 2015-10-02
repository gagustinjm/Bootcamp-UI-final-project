var app = angular.module('twitterApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: 'views/home.html'
    })
    .when('/tweet_details/:tweetId', {
      controller: 'tweetDetailsCtrl',
      templateUrl: 'views/tweet_details.html'
    }) 
    .when('/blocked_users/', {
      controller: 'blockedUsrsCtrl',
      templateUrl: 'views/blocked_users.html'
    }) 
    .when('/trends/:woeid', {
      controller: 'trendsCtrl',
      templateUrl: 'views/trends.html'
    }) 
    .when('/trends_search/:tQuery', {
      controller: 'trendsSearchCtrl',
      templateUrl: 'views/trends_search.html'
    })     
    .otherwise({
      redirectTo: '/'
    });
});