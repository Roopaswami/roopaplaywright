function celsiusTofahrenheit(celsius) {
    console.log("");
    console.log("Fahrenresult");
    var fahrenheit = (celsius * 5 / 9) + 32;
    return fahrenheit;
}
var fahren = 30;
var fahrenresult = celsiusTofahrenheit(fahren);
console.log("The Fahrenheit for the given ".concat(fahren, "\u00B0celsius is ").concat(fahrenresult, "\u00B0F"));
console.log("");
function factorial5(num5) {
    console.log("Factorial");
    var factorial = 1;
    for (var i = num5; i > 1; i--) {
        factorial = i * factorial;
        //  console.log(factorial);      
    }
    return factorial;
}
var num = 5;
var factreult = factorial5(num);
console.log("The factorial of a given number ".concat(num, " is ").concat(factreult));
console.log("");
function vowel(str) {
    var resvowel = str.split("");
    var check = resvowel.filter(function (n) { return /[a,e,i,o,u]/.test(n); });
    return check;
}
var name6 = "Roopa";
var vowelres = vowel(name6);
console.log("String contains vowels are : " + vowelres.join(", "));
console.log("");
function leapyear(yrs) {
    if (yrs % 4 === 0) {
        return " Leap year";
    }
    else {
        return "not a  Leap year";
    }
}
var year = 2005;
var leapresult = leapyear(year);
console.log("The given year ".concat(year, " is ").concat(leapresult));
console.log("");
