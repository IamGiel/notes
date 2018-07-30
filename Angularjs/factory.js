// When you’ re using a Factory you create an object, add properties to it, then
// return that same object.When you pass this service into your controller, 
// those properties on the object will now be available in that controller through your factory.

app.controller('myFactoryCtrl', function ($scope, myFactory) {
    $scope.artist = myFactory.getArtist()
})

app.factory('myFactory', function () {
    var _artist = '';
    var service = {}

    service.getArtist = function () {
        return _artist
    }

    return service;
})

//STEP ONE

app.factory('myFactory', function () {
    var service = {};
    return service; // just return an object
});
// STEP TWO

app.factory('myFactory', function ($http, $q) {
    var service = {};
    //setting some variables and function
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }

    return service;
});