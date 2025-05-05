function stringex(str) {
    var char = str.split("");
    for (var i = 1; i < str.length; i++) {
        var first = str.slice(i) + str.slice(0, i);
        console.log(first);
        // console.log(char + first);
    }
    // console.log(char);
}
stringex("Venkat");
