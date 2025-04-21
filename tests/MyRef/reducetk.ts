const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((a, b) =>
     a.concat(b), []);
console.log(flat); 


function maximum(maximum) {
    return maximum.reduce((a, b) => (a > b ? a : b));
}
console.log(maximum([2, 3, 5, 6]));