var score1 = [2, 3, 5, 6, 9];
var total = 0;
for (var i = 0; i < score1.length; i++) {
    total = total + score1[i];
}
var avg = total / score1.length;
console.log("Total Value : " + total);
console.log("Average Value : " + avg);
