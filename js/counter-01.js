// для поиска по атрибутам тега используем ('[atribute_name="name"]')

// находим лементы на странице
const buttonMinus=document.querySelector('[data-action="minus"]');
const buttonPlus=document.querySelector('[data-action="plus"]');
const counter=document.querySelector('[data-counter]');

// отслеживаем клики 
buttonMinus.addEventListener('click',function(){
    //parseInt - получаем целое число из iinerText (это строка)
    //счетчик больше 1
    if(parseInt(counter.innerText>1 )){ 
        counter.innerText=--counter.innerText;
    }
    
});

buttonPlus.addEventListener('click',function(){
    counter.innerText=++counter.innerText;
});

