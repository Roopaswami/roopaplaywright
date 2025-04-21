//Fibonacci
function Fibonacci(limit:number)
{
    let num: number= 0;
    let num2:number =1;
    console.log(num);  
    console.log(num2);
    for(let i=0;i<limit;i++)
    {
        let num3 = num + num2;
        console.log(num3); 
            num=num2;
            num2=num3
     }
}
Fibonacci(10);


// Primenumber
function primenumber(num4)
{
    for(let j=2;j<num4;j++){
        let isPrime= true;
    
    for(let i=2;i<num4;i++)
    if (j%i===0){
        isPrime= false;
        console.log("Not a prime number")
        return num4;
}}

    console.log("prime number")

}
primenumber(10);


// Reverse
function reverse(str:string)
{
  
    let rev = str.split('').reverse().join();
    console.log(rev);
}
reverse("Roopa")



//Factorial
function Factorial(limit:number)
{
    let num: number= 1;
    let num2:number =2;
    console.log(num);  
    console.log(num2);
    for(let i=0;i<limit;i++)
    {
        let num3 = num * num2;
        console.log(`The factorial of ${num2} is ${num3}`); 
            num=num2;
            num2=num3
     }
}
Factorial(6);


//Multiplication
function multiplication(limit:number)
{
    let num: number= 1;
    let num2:number =2;
    console.log(num);  
    console.log(num2);
    for(let j=1;j<limit;j++)
    {

        console.log(`The multiplication table of ${j} `); 
        console.log(`===========================`); 
    for(let i=1;i<=10;i++)
    {
        let num3 = i * j;
        console.log(`The multiplication of ${i} is ${num3}`); 
          
     }
}
}
multiplication(6);