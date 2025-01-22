function firstLetterToUpperCse(str){
    return str[0].toUpperCase();
}
console.log(firstLetterToUpperCse("jhbjvf"));



function shortenString(str,limit){
    if (str.length<=limit){
        return str;
    }

    let slicedString=str.slice(0,limit);
    const lastIndex=Math.max(
        slicedString.lastIndexOf(' '),
        slicedString.lastIndexOf('('),
        slicedString.lastIndexOf(','),
        slicedString.lastIndexOf('!'),
        slicedString.lastIndexOf('?'),
        slicedString.lastIndexOf(':'),
        slicedString.lastIndexOf(';'),
        slicedString.lastIndexOf(')'),
        slicedString.lastIndexOf('/'),
    );
    if (lastIndex){
        slicedString=slicedString.slice(0,lastIndex);
    }

    return slicedString+"...";
    
}


console.log(shortenString("fg gh, yukjh",10));


function isSubstr(str1,str2){
    let isSubstr=false;
    if (str1.includes(str2)||str2.includes(str1)){
        isSubstr=true;
    }
    return isSubstr;
}
console.log(isSubstr("vfv","oifv"));