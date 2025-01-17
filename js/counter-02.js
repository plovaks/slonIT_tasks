
window.addEventListener('click',function(event){

    // объявление переменной для счетчика
    let counter;
    // проверка является ли элемент кнопкой + или - (клик строго по кнопкам)
    if (event.target.dataset.action==='plus'||event.target.dataset.action==='minus'){
        // Находим обертку счетчика
        const counterWrapper=event.target.closest('.counter-wrapper');
        // находим див с числом счетчика
        counter=counterWrapper.querySelector('[data-counter]');
    }
    
   
    // обращение к атрибутам data
    if (event.target.dataset.action==='plus'){
        
        counter.innerText=++counter.innerText;
    }

    if (event.target.dataset.action==='minus'){

        counter.innerText=--counter.innerText;
    }


});