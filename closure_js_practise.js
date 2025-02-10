// логгер
function createLogger(){
    let arrOflogs=[];
    return {
    log(message){
        arrOflogs.push(message);
    },

    getLogs(){
        return arrOflogs;
    }
}
}

let attempt1=createLogger();
attempt1.log('Hi');
attempt1.log('My');
attempt1.log('name');
console.log(attempt1.getLogs());


// генератор случайных чисел из диапазона
function createRandomGenerator(min, max){
    return function(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}


const randomValue=createRandomGenerator(1,10);
console.log(randomValue());
console.log(randomValue());
console.log(randomValue());



