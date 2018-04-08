angular
  .module("directoryApp", [])
  .controller("directoryController", function() {
    //variable declarations here:
    var dirList = this;
    dirList.toggle = false;

    //users
    dirList.userData = [
      {
        firstName: "Gel",
        skill: "sword",
        hitPoints: 12,
        email: "gel@mailer.com"
      },
      {
        firstName: "Mike",
        skill: "speed",
        hitPoints: 14,
        email: "mike@mailer.com"
      },
      {
        firstName: "Jen",
        skill: "intel",
        hitPoints: 13,
        email: "jen@mailer.com"
      },
      {
        firstName: "Love",
        skill: "anti-gravity",
        hitPoints: 10,
        email: "love@mailer.com"
      }
    ];

    dirList.addPerson = function() {
      dirList.userData.push({
        firstName:dirList.firstName,
        skill:dirList.skill,
        hitPoints:dirList.hitPoints,
        email:dirList.email
      });
      dirList.firstName = "";
      dirList.skill = "";
      dirList.hitPoints = "";
      dirList.email = "";
    };
  });
