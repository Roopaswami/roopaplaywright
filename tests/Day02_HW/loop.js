//Fibonacci
function Fibonacci(limit) {
    var num = 0;
    var num2 = 1;
    console.log(num);
    console.log(num2);
    for (var i = 0; i < limit; i++) {
        var num3 = num + num2;
        console.log(num3);
        num = num2;
        num2 = num3;
    }
}
Fibonacci(10);
// Primenumber
function primenumber(num4) {
    for (var j = 2; j < num4; j++) {
        var isPrime = true;
        for (var i = 2; i < num4; i++)
            if (j % i === 0) {
                isPrime = false;
                console.log("Not a prime number");
                return num4;
            }
    }
    console.log("prime number");
}
primenumber(10);
// Reverse
function reverse(str) {
    var rev = str.split('').reverse().join();
    console.log(rev);
}
reverse("Roopa");
//Factorial
function Factorial(limit) {
    var num = 1;
    var num2 = 2;
    console.log(num);
    console.log(num2);
    for (var i = 0; i < limit; i++) {
        var num3 = num * num2;
        console.log("The factorial of ".concat(num2, " is ").concat(num3));
        num = num2;
        num2 = num3;
    }
}
Factorial(6);
//Multiplication
function multiplication(limit) {
    var num = 1;
    var num2 = 2;
    console.log(num);
    console.log(num2);
    for (var j = 1; j < limit; j++) {
        console.log("The multiplication table of ".concat(j, " "));
        console.log("===========================");
        for (var i = 1; i <= 10; i++) {
            var num3 = i * j;
            console.log("The multiplication of ".concat(i, " is ").concat(num3));
        }
    }
}
multiplication(6);
