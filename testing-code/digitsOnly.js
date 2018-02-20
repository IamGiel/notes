//Test if pin number: 
// 1. Must 4 or 6 digit
// 2. Must only digit
const password = function (pin) {
    //const testingDigits = /\d/.test(pin);//digits
    const digitsOnly = (/\D/i).test(pin); //are there non digits in `pin`? 

    //console check
    console.log("are there non-digits?",digitsOnly);
    console.log(pin);
    console.log("pin length", pin.length);
    if ((pin.length == 4) && (digitsOnly == false)) {
        console.log("good not less than 4, not over 6, and no letters");
        return true;
    } else if ((pin.length == 6) && (digitsOnly == false)) {
        console.log("good not less than 4, not over 6, and no letters");
        return true;
    } else {
        console.log("pick another pin ...");
        return false;
    }
};

password("122!33");