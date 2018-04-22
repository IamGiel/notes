const password = function (pin) {
    
    //testing if `pin` has digits
    const testingDigits = /\d/.test(pin);//digits
    //console check
    console.log(testingDigits);
    console.log(pin);
    console.log("pin length", pin.length);
    if ((pin.length == 4) && (testingDigits == false)) {
        console.log("good not less than 4, not over 6, and no numbers");
        return true;
    } else if ((pin.length == 6) && (testingDigits == false)) {
        console.log("good not less than 4, not over 6, and no numbers");
        return true;
    } else {
        console.log("check again...");
        return false;
    }
};

password("123!4");