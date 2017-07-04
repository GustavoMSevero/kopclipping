
var TwitterPackage = require('twitter');
var mongoose = require('mongoose');
var stringSearcher = require('string-search');

var secret = {
  consumer_key: 'iWExWHtpT49bV5ije1XwnJ6f8',
  consumer_secret: 'QAyWUBEFZFiMLoyD6neKcHFvaRkZgWJ8peGloR6W6hhdY6KLEd',
  access_token_key: '36774260-MPr3F8jCLNKFPN1J7f3gS8zknjBVr36NeVwlyiUVV',
  access_token_secret: '1Az2u0DmNh6ro3n9hXqbjxmwexOVl9ePbjutYrpNN5UT9'
}

//mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb://user6:123456@ds139942.mlab.com:39942/kopteste');

var Twitter = new TwitterPackage(secret);

var ClipingPosts = mongoose.model('Post', { tweet: String, usuario: String });

Twitter.stream('statuses/filter', 
  {
    track: '@Vivoemrede'
  }, function(stream) {

  stream.on('data', function(tweet) {

  /*stringSearcher.find('@Vivoemrede', 'data').then(function(resultArr) {
    resultArr => [ {line: 1, text: '@Vivoemrede'} ] 
  });*/

    console.log(tweet.text);
    console.log(tweet.user.name);
    //stringSearcher();

    var posts = new ClipingPosts({ tweet: tweet.text, usuario: tweet.user.name });

    posts.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Tweetaram');
      }
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});



