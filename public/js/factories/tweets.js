app.factory('tweets', function () {

    var tweets = [];

    return {
    saveTweets: function(pTweets) {
        tweets = pTweets;
    },

    getTweet: function(id) {
        if(tweets.length) {
            for(var i=0; i<tweets.length; i++){
                if(tweets[i].id == id) {
                    return tweets[i];
                }
            }
        } 
    },   

    getTweets: function() {
        return tweets;
    }
    };
});