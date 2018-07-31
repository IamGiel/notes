//restrict property

// Note: When you create a directive, it is restricted to attribute and elements only by
// default.In order to create directives that are triggered by class name, you need to use the restrict option.

// The restrict option is typically set to:

//     'A' - only matches attribute name 
//     'E' - only matches element name 
//     'C' - only matches class name 
//     'M' - only matches comment

// These restrictions can all be combined as needed:


//Example:

angular.module('docsRestrictDirective', [])
    .controller('Controller', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function () {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });