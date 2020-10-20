// to request weather data for orlando

var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "TL2UXk2f"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9Y1pFUTc0bmEzUUxTJmQ9WVdrOVZFd3lWVmhyTW1ZbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTJm',
    'acbe87c9ba608044cce94a9ae7eb5ca79327344c',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=orlando,fl&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    }
);