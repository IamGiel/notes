angular
  .module("directoryApp", [])
  .controller("directoryController", function() {

    var dirList = this;
    dirList.userData = [
      {
        firstName: "Gel",
        skill: "sword",
        email: "gel@mailer.com"
      },
      {
        firstName: "Mike",
        skill: "speed",
        email: "mike@mailer.com"
      },
      {
        firstName: "Jen",
        skill: "intel",
        email: "jen@mailer.com"
      },
      {
        firstName: "Love",
        skill: "anti-gravity",
        email: "love@mailer.com"
      }
    ];

    dirList.addPerson = function() {
      dirList.userData.push({
        firstName:dirList.firstName,
        skill:dirList.skill,
        email:dirList.email
      });
      dirList.firstName = "";
      dirList.skill = "";
      dirList.email = "";
    };
  });
