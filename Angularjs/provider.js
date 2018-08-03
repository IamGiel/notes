// Provider

// The biggest thing to remember about Providers is that they’ re the 
// only service that you can pass into the 
// app.config portion of your application.

app.provider('myProvider', function ($http, $q) {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    // Going to set this property on the config fn below
    this.thingFromConfig = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }
});