
  function calculate(num1,num2, calculateFunction){
    return calculateFunction(num1,num2);
}


  const divideNumbers=function(num1,num2){
    return `Частное чисел ${num1}/${num2} = ${num1/num2}`;
  }

  const addUpNumbers=function(num1,num2){
    return `Сумма чисел ${num1}+${num2} = ${num1+num2}`;
  }

  const substructNumbers=function(num1,num2){
    return `Разность чисел ${num1}-${num2} = ${num1-num2}`;
  }

  const multiplyNumbers=function(num1,num2){
    return `Произведение чисел ${num1}*${num2} = ${num1*num2}`;
  }

  const operations={
    multiply:multiplyNumbers,
    divide:divideNumbers,
    plus:addUpNumbers,
    minus:substructNumbers,

  };
  const selectedOperation1="multiply";
  const selectedOperation2="divide";
  const selectedOperation3="plus";
  const selectedOperation4="minus";

  console.log(calculate(6,3,operations[selectedOperation1]));
  console.log(calculate(6,3,operations[selectedOperation2]));
  console.log(calculate(6,3,operations[selectedOperation3]));
  console.log(calculate(6,3,operations[selectedOperation4]));