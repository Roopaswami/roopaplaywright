// To find number is odd or even.
let num3: number = 7;
console.log("");
if (num3 % 2 == 0) {
    console.log(`The given number ${num3} is Even number`);
}
else {
    console.log(`The given number ${num3} is Odd number`);
}
console.log("");



// To find the  Grade
function result2(grade: number, threshold: number): string {
    if (grade >= threshold) {
        return `${grade} ✅ Pass`;
    }
    else {
        return `${grade} ❌ Fail`;
    }
}
let dispayResult = result2(79, 40);
console.log(`Candidate score is  ${dispayResult}`);
console.log("");


// To find the type of triangle
function triangle(a,b,c){
if(a===b && b===c){
    console.log(`The triangle with sides ${a}, ${b}, ${c} in Equilateral`);
}else if (a===b || b===c || c===a) {
    console.log(`The triangle with sides ${a}, ${b}, ${c} in Isosceles`);
}
else {
    console.log(`The triangle with sides ${a}, ${b}, ${c} in scalene`);
}

}
triangle(4,4,4);
triangle(6,5,6);
triangle(8,7,9);

console.log("");


// To find given string is Palindrome
function Palindrome(str: string) {
    let name2 = str.split('').join();
    //  console.log(name2)
    let rev = str.split('').reverse().join();
    // console.log(rev)
    if (name2 == rev) {
        console.log(`The given string ${str} is palindrome`);

    }
    else {
        console.log(`The given string ${str} is not palindrome`);
    }

}
Palindrome("Roopa")
Palindrome("LIRIL")
console.log("");



// To find the Leap year
function leapyear(year: number) {
    if (year % 4 === 0) {
        //    console.log('Leap year ${year}')
        console.log(`The given year ${year} is Leap year`)

    }
    else {
        // console.log('Not a Leap year ${year}')
        console.log(`The given year ${year} is not a Leap year`)

    }
}
leapyear(1949)
leapyear(2000)
console.log("");