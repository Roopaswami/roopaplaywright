function expandstr() {
    var inputstr = "a3b4c2";
    var chars = inputstr.split('').filter(function (c) { return /[A-Za-z]/.test(c); });
    console.log("Characters", chars.join(", "));
    var nums = inputstr.split('').filter(function (c) { return /[0-9]/.test(c); });
    console.log("Numbers", nums);
    // let expand = chars.map((char,index)=> char.repeat(nums[index]))
    // console.log(expand)
}
expandstr();
