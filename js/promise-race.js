'use strict'

/*
    Задача: Создать функцию, имитирующую поведение Promise.race.
    Принцип работы: Функция должна анализировать массив промиссов и возвращать результат первого выполненного или отклоненного обещания.

    Реализация:
    [x] Создание Нового Промиса: Начнем с создания нового промиса для управления процессом.
    [x] Логика Обработки: Внутри этого промиса необходимо реализовать логику, которая позволит отслеживать выполнение или отклонение каждого промиса из массива.
    [x] Возврат Результата: Итоговый промис должен возвращать результат первого промиса, который был выполнен или отклонен, игнорируя остальные.
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 5000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 5000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 4000)
})

async function PromiseRace (promises = []) {
    return new Promise((resolve, reject) => {
        promises.map(promise => {
            Promise.resolve(promise).then(
                data => {resolve(data)},
                error => {reject(error)}
            )
        })
    })
}

PromiseRace([promise1, promise2, promise3]).then(data => {
    console.log(data)
}).catch(error => {
    console.log(new Error(error))
})