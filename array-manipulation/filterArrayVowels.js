var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false

console.log(arr.includes('p')); //false

//`.includes()` tests if an array has the parameter 
// passed into the function `.includes(here)`

//example

const stripVowels = str => {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result += str[i];
        }
    }
    return result;
};