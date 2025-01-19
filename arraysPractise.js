
// тестовый массив для проверки работы функций
const testArray=["s",1,0,"t"];
// итоговой массив, в который записывает "срез" из mySlice
let resultArray=[];




function mySlice(arr, start,end){
    for (let i=start;i<end;i++){
        resultArray.push(arr[i]);
    }
    return resultArray;
}
console.log(mySlice(testArray,1,3));



function myIndexOf(arr,item,from){
    // искомый индекс элемента в массиве
    let indexOfItem;
    for (let i=from;i<arr.length;i++){
        // если нашли индекс заканчиваем поиск
        if (arr[i]===item){
            indexOfItem=i;
            break;
        }else{
            indexOfItem=null;
        }
    }
    return indexOfItem;
}
console.log(myIndexOf(testArray,"t",0));



function myIncludes(arr,item,from){
    // начальное значение значение жлемента - "не найден"
    let isItemIncluded=false;
    for (let i=from;i<arr.length;i++){
        //если элемент найден, печатаем и заканчиваем работу программы
        if (arr[i]===item){
            isItemIncluded=true;
            break;
        }
    }
    return isItemIncluded;
}

console.log(myIncludes(testArray,"s",0));