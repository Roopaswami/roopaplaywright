function expandstr()
{
let inputstr = "a3b4c2";
let chars= inputstr.split('').filter(c=>/[A-Za-z]/.test(c))
console.log("Characters",chars.join(", "));
let nums = inputstr.split('').filter(c=>/[0-9]/.test(c))
console.log("Numbers", nums)
// let expand = chars.map((char,index)=> char.repeat(nums[index]))
// console.log(expand)

}
expandstr();