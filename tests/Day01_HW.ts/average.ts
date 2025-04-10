let score1 :number[]= [2,3,5,6,9];
let total = 0;
for (let i=0;i<score1.length;i++)
{
   
   total = total+ score1[i];
    
}
let avg: number=total / score1.length;
console.log("Total Value : " + total)
console.log("Average Value : " + avg)
