// Here we will count the number of instance
// a value appears inside an array:
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};//inside the for-loop, 
                //`counts` automatically counts number of instance 
                //that a value inside an array occured. 

for (var i = 0; i < arr.length; i++) {
    var num = arr[i]; console.log(num);
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    console.log(counts[num])
}

console.log(counts[5], counts[2], counts[9], counts[4]);


// ====NOTES ON TERNARY OPERATOR====
// `?` operator will be used
// example: var voteable = (age < 18) ? "Too young" : "Old enough"; >>> means
// If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".
