"use strict"

/*
    - Разработать класс Billing, олицетворяющий счет.
    - Счет может быть различного типа: фиксированный, почасовой, по элементам.
    - По умолчанию, Billing имеет свойство Amount и метод CalculateTotal для расчета Amount.

    Варианты реализации CalculateTotal:
    [x] Fixed Billing: Возвращает текущий Amount.
    [x] Hour Billing: Возвращает Amount, умноженный на количество часов. Количество часов передается через конструктор.
    [x] Item Billing: Аналогично Hour Billing, но вместо часов используется количество элементов.

    Важное условие: Соблюдение принципа открытости/закрытости.
    Разработка должна происходить через наследование, а не модификацию исходного класса Billing
    для поддержки новых типов расчетов.
 */

class Billing {
    amount;
    constructor(amount) {
        this.amount = amount
    }
    calculateTotal(sum){
        return this.amount += sum
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount)
    }
    calculateTotal() {
        return this.amount
    }
}

class HourBilling extends Billing {
    #hours;
    constructor(amount, hours) {
        super(amount);
        this.#hours = hours
    }

    calculateTotal() {
        return this.amount * this.#hours
    }
}

class ItemBilling extends Billing {
    #itemCount;
    constructor(amount, itemCount) {
        super(amount);
        this.#itemCount = itemCount
    }

    calculateTotal() {
        return this.amount * this.#itemCount
    }
}

const billing = new Billing(10).calculateTotal(10)
const fixBilling = new FixedBilling(1).calculateTotal()
const hoursBilling = new HourBilling(2, 10).calculateTotal()
const itemsBilling = new ItemBilling(10, 5).calculateTotal()

console.log('10.8. Домашнее задание - SOLID')
console.log('billing', billing)
console.log('fixBilling', fixBilling)
console.log('hoursBilling', hoursBilling)
console.log('itemsBilling', itemsBilling)
console.log('--- Конец ---')
