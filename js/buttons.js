"use strict"

/*
    Задача
    [x] Создать 5 кнопок с текстом "Нажми меня". Расположение кнопок - на ваше усмотрение.
    [x] Добавить блок (div), отображающий количество нажатий на кнопки. Изначальное значение счётчика - 0.
        При нажатии на любую кнопку:
            [x] Изменить текст нажатой кнопки на "Нажата".
            [x] Увеличить счетчик нажатий на 1.
            [x] При последующем нажатии на другую кнопку, текст предыдущей нажатой кнопки должен смениться обратно на
               "Нажми меня", а у новой нажатой кнопки - измениться на "Нажата".
    В результате, каждое нажатие на кнопку увеличивает счетчик на единицу, и в любой момент времени видна последняя нажатая кнопка.

    Требования:
    - Применение практик работы с DOM.
    - Обработка событий на кнопках.
    - Реализация делегирования событий.
 */

initButtonsCounter('#buttons')


function initButtonsCounter(rootElementSelector){
    generateButtons(5, rootElementSelector)
    createClickCounter(rootElementSelector)
}

function generateButtons(countBtn = 5, rootElementSelector) {
    const rootBtnElement = document.createElement('div')
    rootBtnElement.classList.add('btn-wrapper')

    for(let i = 0; i < countBtn; i++) {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerText = "Нажми меня"
        rootBtnElement.append(btn)
    }

    document.querySelector(rootElementSelector).append(rootBtnElement)

    rootBtnElement.addEventListener('click', (event)=> {
        if(event.target.classList.contains('btn')){
            const btn = event.target
            btn.innerText = "Нажата"
            const counterElement = document.querySelector('.btn-counter p')
            counterElement.innerText = parseInt(counterElement.innerText) + 1;

            [...rootBtnElement.children].forEach((button) => {
                if(button !== btn) {
                    button.innerText = "Нажми меня"
                }
            })
        }
    })
}

function createClickCounter(rootElementSelector) {
    const rootElement = document.querySelector(rootElementSelector)
    const counterElement = document.createElement('div')
    counterElement.innerHTML = "<p>0</p>"
    counterElement.classList.add('btn-counter')
    rootElement.append(counterElement)
}
