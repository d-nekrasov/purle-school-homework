/**
 * Задача:
 * Сделать с помощью Set уникализацию массива объектов
 * [{id: 1, name: "Вася"},{id: 2, name: "Петя"},{id: 1, name: "Вася"},]
 */

let dataSet = new Set([
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Вася"},
]);

const arraySet = [...dataSet]
const arrayIDs = arraySet.map(element => element.id)
const uniqueSet = new Set(arraySet.filter((object, index, arr) => {
    return arrayIDs.indexOf(object.id) === index
}))

console.log(uniqueSet)