/**
 * @param diceType {string} тип многогранника, который будет имитироваться броском. Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
 * @returns {any} возвращает случайное число в диапазоне возможных значений для выбранного многогранника. Например, для D6 это числа от 1 до 6 включительно.
 */
function throwDice(diceType= "D4"){

    const dices = {
        'D4': 4,
        'D6': 6,
        'D8': 8,
        'D10': 10,
        'D12': 12,
        'D16': 16,
        'D20': 20
    }

    if(!dices.hasOwnProperty(diceType)){
        return false;
    }

    const minValue = 1;
    const maxValue = dices[diceType]

    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}

console.log('4.11. Домашнее задание - Расчёты и math');
console.log('Несуществующий:', throwDice('D2')) // false
console.log('Default:', throwDice()) // default dice 1-4
console.log('D4:', throwDice('D4')) // random dice 1-4
console.log('D6:', throwDice('D6')) // random dice 1-6
console.log('D8:', throwDice('D8')) // random dice 1-8
console.log('D10:', throwDice('D10')) // random dice 1-10
console.log('D12:', throwDice('D12')) // random dice 1-12
console.log('D16:', throwDice('D16')) // random dice 1-16
console.log('D20:', throwDice('D20')) // random dice 1-20
console.log('--- Конец ---');
