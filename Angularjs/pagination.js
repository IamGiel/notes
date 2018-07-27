//Filtering all pages with pagination in angularJs (not only the current one)


// 1. Inject the AngularJS filter filter into your controller:
// app.controller(‘MainCtrl’, function ($scope, filterFilter)

// To inject a filter in AngularJS we need to postfix it with “Filter”.We are injecting angularJS filter filter.If you have your custom filter performing the filtration you need to inject it into your controller.

// 2. Add a watch to the text box which the filtration is based on:

$scope.$watch('search.name', function (term) {
    var obj = {
        name: term
    } //  << this is optional

    $scope.filterList = filterFilter($scope.list, obj);
    $scope.currentPage = 1;
});

// Below is good for parsing through array of data (below we have `scope.list` as an array)

$scope.$watch('search.name', function (term) {


    $scope.filterList = filterFilter($scope.list, term);
    $scope.currentPage = 1;
});

// then in the DOM: (remove `filter: search`) 👇🏼

<
div ng - repeat = "item in filterList | filter: search | start: (currentPage - 1) * pageSize | limitTo: pageSize" / >


// ng-model needs to be considered and the name is given inside the $watch method up there.

// Read more here: http://www.dispatchertimer.com/angularjs/pagination-with-filtering-using-angularjs/