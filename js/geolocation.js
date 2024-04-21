'use strict'

/*
    Создать промис, который оборачивает вызов API геолокации.
    Убедиться, что после получения геопозиции можно использовать .then для обработки результата (и .catch для ошибок).
    Вывести полученные координаты геопозиции на страницу.

    Реализовать функцию, возвращающую промис с геопозицией пользователя, и продемонстрировать её работу, выводя координаты на страницу.
 */

getCurrentGeoPosition()
    .then(data => {
        setCurrentGeoPosition('#geo', data.coords)
    })
    .catch(error => console.log(error.message))
    .finally(() => {
        console.log('Выполнен запрос гео данных')
    })

function getCurrentGeoPosition(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position)
        }, error => {
            reject(error)
        }, {maximumAge:0, timeout:0, enableHighAccuracy:false})
    })
}

function setCurrentGeoPosition(rootElement, coords){
    const $root= document.querySelector(rootElement)
    $root.innerHTML = `<p>Ваша текущая позиция: 
                        <br> Широта : ${coords.latitude}
                        <br> Долгота: ${coords.longitude}
                        <br> Погрешность ${coords.accuracy} метров.
                        </p>`
}