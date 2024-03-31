/**
 * @param type {string} тип многогранника, который будет имитироваться броском. Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
 * @returns {number} возвращает случайное число в диапазоне возможных значений для выбранного многогранника. Например, для D6 это числа от 1 до 6 включительно.
 */
function throwDice(type){
    const minValue = 1;
    const maxValue = Number(type.slice(1));

    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}

console.log('4.11. Домашнее задание - Расчёты и math');
console.log('D4:', throwDice('D4'))
console.log('D6:', throwDice('D6'))
console.log('D8:', throwDice('D8'))
console.log('D10:', throwDice('D10'))
console.log('D12:', throwDice('D12'))
console.log('D16:', throwDice('D16'))
console.log('D20:', throwDice('D20'))
console.log('--- Конец ---');
