let userExample={
    likes:19,
    friends:5,
    job:"teacher",
    age:30,
    name:"ivan",
    height:172,
}

function getSumOfNumberValuesOfObject(user){
    let sumOfNumberValues=0;
    for (let key in user){
        if (typeof(user[key])==='number'){
            sumOfNumberValues+=user[key];
        }
    }
    return sumOfNumberValues;
}

console.log( getSumOfNumberValuesOfObject(userExample));

function getSortedArrayOfNmberVakuesOfObject(user){
    let arrOfKeys=[];
    for (let key in user){
        if (typeof(user[key])==='number'){
            arrOfKeys.push(key);
        }
    }
    arrOfKeys.sort((a,b)=>user[b]-user[a]);
    return arrOfKeys;
}

console.log(getSortedArrayOfNmberVakuesOfObject(userExample));
