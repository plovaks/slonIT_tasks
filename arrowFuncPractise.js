function myFilter(numbers, callBack) {
    let result = []; 
    for (let i = 0; i < numbers.length; i++) {
        if (callBack(numbers[i])) { 
            result.push(numbers[i]); 
        }
    }
    return result; 
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, num => num % 2 === 0); 
console.log(evenNumbers); 


const greaterThanThree = myFilter(numbers, num => num > 3); 
console.log(greaterThanThree); 

