function stringex(str){
    let char=str.split("");
    for(let i=1;i<str.length;i++)
    {
   let first =  str.slice(i) + str.slice(0, i);
    console.log(first);
   
        // console.log(char + first);
  
    
    }

    // console.log(char);

}
stringex("Venkat");