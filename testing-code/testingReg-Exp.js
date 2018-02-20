//Test if pin number: 
// 1. Must 4 or 6 digit
// 2. Must only digit
const password = function (pin) {
    //const testingDigits = /\d/.test(pin);//digits
    const not_a_Digit = (/\D/i).test(pin); //test if ONLY DIGITS exists in pin

    //console check
    console.log(not_a_Digit);
    console.log(pin);
    console.log("pin length", pin.length);
    if ((pin.length == 4) && (not_a_Digit == false)) {
        console.log("good not less than 4, not over 6, and no numbers");
        return true;
    } else if ((pin.length == 6) && (not_a_Digit == false)) {
        console.log("good not less than 4, not over 6, and no numbers");
        return true;
    } else {
        console.log("check again...");
        return false;
    }
};

password("123!4");