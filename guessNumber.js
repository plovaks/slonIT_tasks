

let firstNum=1;
let lastNum=100;
let guessNum;

const randNum=Math.floor(Math.random()*100)+1;
console.log(`Компьютер 1 загадал число: ${randNum}` );

while(true){

    guessNum=Math.floor((firstNum+lastNum)/2);
    console.log(`Пробую число ${guessNum}.`)

    if (randNum===guessNum){
        console.log("Угадал!");
        break;
    }

    else if (randNum<guessNum){
        console.log("Меньше!");
        lastNum=guessNum-1;
    }

    else{
        console.log("Больше!");
        firstNum=guessNum+1;
    }

}