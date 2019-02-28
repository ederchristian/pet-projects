# Search Some Tweets

A simple [curl](https://curl.haxx.se/)-like app to get some tweets by hashtags or some words, using [Twurl](https://github.com/twitter/twurl).

## Getting Started

### Prerequisites

1. You must create a [Twitter developer account](https://developer.twitter.com/); 
1. Create [an app](https://developer.twitter.com/en/apps);
1. Then you're able to get the Consumer API keys and the Access token & access token secret.

### Installing

You need to install Twurl  using RubyGems as follows:

```ssh
gem install twurl
```

Then, you can authorize your Twitter app and Twitter account using your consumer key and its secret.

```ssh
twurl authorize --consumer-key key --consumer-secret secret
```

After that, install Twurl with JQ. It'll show you the output in a readable way.

```ssh
brew update
brew install jq
```

## Examples

### Getting the username and location

```ssh
twurl '/1.1/users/show.json?screen_name=ederchristian92' | jq '.| { username: .name, location: .location }'
```

### Getting some tweets by hashtags

```ssh
twurl "/1.1/search/tweets.json?q=#autonomy"
```

### Getting some tweets by hashtags and saving it on a .txt file

```ssh
twurl "/1.1/search/tweets.json?q=#python" > python.txt
```

## Contributing

I'd love if you can help me to improve this simple app. Everybody is able to make a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
