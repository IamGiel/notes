angular
  .module("directoryApp", [])
  .controller("directoryController", function($scope) {
    $scope.userData = [
      // {
      //   firstName: "Gel",
      //   skill: "sword",
      //   email: "gel@mailer.com"
      // },
      // {
      //   firstName: "Mike",
      //   skill: "speed",
      //   email: "mike@mailer.com"
      // },
      // {
      //   firstName: "Jen",
      //   skill: "intel",
      //   email: "jen@mailer.com"
      // },
      // {
      //   firstName: "Love",
      //   skill: "anti-gravity",
      //   email: "love@mailer.com"
      // }
    ];

    $scope.addPerson = function() {
      $scope.userData.push({
        firstName:$scope.firstName,
        skill:$scope.skill,
        email:$scope.email
      });
      $scope.firstName = "";
      $scope.skill = "";
      $scope.email = "";
    };
  });
