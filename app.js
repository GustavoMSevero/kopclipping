var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'iWExWHtpT49bV5ije1XwnJ6f8',
  consumer_secret: 'QAyWUBEFZFiMLoyD6neKcHFvaRkZgWJ8peGloR6W6hhdY6KLEd',
  access_token_key: '36774260-MPr3F8jCLNKFPN1J7f3gS8zknjBVr36NeVwlyiUVV',
  access_token_secret: '1Az2u0DmNh6ro3n9hXqbjxmwexOVl9ePbjutYrpNN5UT9'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
