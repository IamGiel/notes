// Perhaps the biggest thing to know when dealing with creating a Service is 
// that it’ s instantiated with the‘ new’ keyword.

var Person = function (name, age) { //example
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    alert('My name is ' + this.name)
}

var tyler = new Person('Tyler', 23);
tyler.sayName() // alerts 'My name is Tyler'

//========= Heres it is together: =========

var Person = function (name, age) {
    // The next line creates an object that will
    // delegate to the person's prototype on failed lookups.

    //var obj = Object.create(Person.prototype);

    // The next line sets 'this' to the newly created object
    // this = obj;
    this.name = name;
    this.age = age;
}



Person.prototype.sayName = function () {
    alert('My name is ' + this.name)
}

var tyler = new Person('Tyler', 23);
tyler.sayName() // alerts 'My name is Tyler'


// NOW THE SERVICE IN ANGULAR JS  

app.service('myService', function ($http, $q) {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
    }
});