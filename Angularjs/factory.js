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

// add properties to the service
app.factory('myFactory', function ($http, $q) {
    var service = {};
    var baseUrl = 'https://itunes.apple.com/search?term='
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }

    service.setArtist = function (artist) { // accepts artists and set artists
        _artist = artist;
    }

    service.getArtist = function () { // returns the artists
        return _artist;
    }

    service.callItunes = function () { //first calls makeUrl() in order to build the URL we’ll use with our $http request.
        makeUrl()
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: _finalUrl
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject('There was an error');
        })

        return deferred.promise;
    }

    return service;
});

// Now our factory is complete.We are now able to inject‘ myFactory’ 
// into any controller and we’ ll then be able to 
// call our methods that we attached to our service object(setArtist, getArtist, and callItunes).

app.controller('myFactoryCtrl', function ($scope, myFactory) {
    $scope.data = {};
    $scope.updateArtist = function () {
        myFactory.setArtist($scope.data.artist);
    }

    $scope.submitArtist = function () {
        myFactory.callItunes()
            .then(function (data) {
                $scope.data.artistData = data;
            }, function (data) {
                alert(data);
            })
    }
})

// In the controller above we’ re injecting in the‘ myFactory’ service.
// We then set properties on our $scope object that are coming from data from‘ myFactory’.
// The only tricky code above is
// if you’ ve never dealt with promises before.
// Because callItunes is returning a promise, we are able to use the.then() method and only set $scope.data.artistData 
// once our promise is fulfilled with the iTunes data.You’ ll notice our controller is very‘ thin’.All of our logic 
// and persistent data is located in our service, not in our controller.

CREDIT: https: //tylermcginnis.com/angularjs-factory-vs-service-vs-provider/