// To find the square of a number.
function square1(sqr) {
    return Math.pow(sqr, 2);
}
var result = square1(6);
console.log("");
console.log("Square of a number : ".concat(result));
console.log("");
// Filters out even numbers from an array
function evennum1(even) { return even.filter(function (n) { return n % 2 === 0; }); }
var even = evennum1([2, 3, 4, 5, 6, 9]);
console.log("Even number from an array is : " + even.join(", "));
console.log("");
//Calculates the average of a list of numbers.
function average1(avg) {
    return avg.reduce(function (a, b) { return a + b; }, 0) / avg.length;
}
var average = average1([2, 3, 5, 6]);
console.log("The average of a list of numbers is : ".concat(average));
console.log("");
// Length of the longest string in an array.
function lengtharr1(len) {
    return len.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
}
var name4 = lengtharr1(["Roopa", "Loganathan", "Prem"]);
console.log("Length of the longest string in an array is : ".concat(name4));
console.log("");
//To map over an array and return each number squared.
function squares1(sqr) {
    return sqr.map(function (n) { return n * n; });
}
var sqrnum = squares1([2, 6, 4, 8]);
console.log("The given number squared are - ".concat(sqrnum.join(" : ")));
console.log("");
