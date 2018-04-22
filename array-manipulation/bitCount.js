//code-war challenge 
//1. Get binary count version of a number
//2. Count the instance of `1` in each binary version  

var countBits = function (n) {
    // Need to know:
    // A number passed into `toString(`here`) 
    // returns the base count/version of that number
    // Below, we are using 2, which `binary version` of n.
    const base = (n).toString(2).split('');//pass 2 here
    console.log("this is base ", base);

    // make a sum with the array and make the index a Number
    const result = base.reduce((sum, num) => sum + Number(num), 0);
    console.log(result);
    //return result;

    //here we count the occurence of `1` for every countBit
    const count = {};
    let bitOneCount = 0;

    for (let i = 0; i < base.length; i++) {
        const element = base[i];
        console.log(element == 1);
        count[element] = count[element] ? count[element] + 1 : 1;
        console.log(count[element]);

        if (element == 1) {
            bitOneCount++;
        }
    };
    console.log(bitOneCount);
    return bitOneCount;

}



countBits(7);

