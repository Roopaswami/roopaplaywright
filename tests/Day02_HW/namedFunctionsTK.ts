    function celsiusTofahrenheit(celsius){
        console.log("");
        console.log("Fahrenresult");
        let fahrenheit = (celsius * 5/9) + 32;
        return fahrenheit;
     }
     let fahren=30;
     const fahrenresult = celsiusTofahrenheit(fahren);
     console.log(`The Fahrenheit for the given ${fahren}°celsius is ${fahrenresult}°F`);
     console.log("");



     function factorial5(num5){
        console.log("Factorial");
        let factorial=1;
        for(let i=num5;i>1;i--){
             factorial =  i*factorial; 
            //  console.log(factorial);      
        }
        return factorial;

     }
     let num= 5;
     let factreult = factorial5(num);
     console.log(`The factorial of a given number ${num} is ${factreult}`);
     console.log("");
    

     function vowel(str){
        let resvowel= str.split("");
        let check = resvowel.filter(n=>/[a,e,i,o,u]/.test(n))
        return check;
     }
     let name6= "Roopa";
     let vowelres= vowel(name6);
     console.log("String contains vowels are : " + vowelres.join(", "));
     console.log("");

     function leapyear(yrs)
     {
        if(yrs%4===0){
         return " Leap year";
                }
               else
            {
               return "not a  Leap year"; 
            }      
           }
     
     let year=2005;
     let leapresult = leapyear(year);
     console.log(`The given year ${year} is ${leapresult}`);
     console.log("");