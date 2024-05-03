/*
    Определяет задачу (task) с методом run, который, когда вызывается, выводит в консоль заданное сообщение
    (например, "писать код").
 */

export class Task
{
    #name
    #description
    constructor(name, description) {
        this.#name = name
        this.#description = description
    }

    run(){
        console.log(`Задача: ${this.#name}\nОписание: ${this.#description}`)
    }
}