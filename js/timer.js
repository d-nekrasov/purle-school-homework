"use strict"

/**
 * 1. [x] Создайте базовую HTML-структуру для отображения таймера.
 * 2. [x] В JavaScript, определите дату окончания года.
 * 3. [x] Используйте setInterval для создания цикла, который каждую секунду будет обновлять таймер.
 * 4. [x] Рассчитайте разницу между текущим временем и концом года.
 * 5. [x] Форматируйте оставшееся время в формате "XX месяцев, XX дней, XX часов, XX минут, XX секунд".
 * 6. [x] Покажите отформатированное время в таймере, который виден в браузере.
 * 7. [x] Обновляйте таймер каждую секунду, уменьшая время до конца года.
 *
 */


newYearCounter('01.01.2025 00:00:00')


function newYearCounter(date) {
    const newYearDate = new Date(date);
    const interval = setInterval(() => {
        setNewYearTimer(newYearDate)
    }, 1000)


    function setNewYearTimer(endDate) {
        const now = new Date();

        const newYearBeautyDate = new Intl.DateTimeFormat('RU-ru', {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"

        }).format(endDate);

        const $timer = document.querySelector('#newYearTimer');
        const $newYearDate = document.querySelector('#newYearDate')

        const diff = endDate.getTime() - now.getTime()

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        const month = Math.floor(days / 30)

        $timer.innerHTML = `${month} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
        $newYearDate.innerHTML = `Окончание отсчёта: ${newYearBeautyDate}`

    }
}




