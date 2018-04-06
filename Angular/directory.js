angular
  .module("directoryApp", [])
  .controller("directoryController", function($scope) {
    $scope.userData = [
      {
        firstName: "Gel",
        lastName: "DeAsis",
        email: "gel@mailer.com",
        password: "secretKey"
      },
      {
        firstName: "Mike",
        lastName: "Ashe",
        email: "mike@mailer.com",
        password: "secretKey"
      },
      {
        firstName: "Jen",
        lastName: "Richardson",
        email: "jen@mailer.com",
        password: "secretKey"
      },
      {
        firstName: "Love",
        lastName: "Gonzales",
        email: "love@mailer.com",
        password: "secretKey"
      }
    ];
  });
