var countBits = function (n) {
    // Need to know:
    // A number passed into `toString(`here`) 
    // returns the base count/version of that number
    // Below, we are using 2, which `binary version` of n.
    const base = (n).toString(2).split('');
    console.log("this is base ",base);

    // make a sum with the array and make the index a Number
    const result = base.reduce((sum, num) => sum + Number(num), 0);
    console.log(result);
    //return result;

};

countBits(2);
countBits(3);
countBits(4);
