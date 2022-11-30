var str = "TinTin";
var rev = "";
N = str.length;
   for(let i = N-1;i>=0;i--){
        
        rev += str[i]
    }
    if(rev == str)
    console.log("Yes");
    else
    console.log("No");
}