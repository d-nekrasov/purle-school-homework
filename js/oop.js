"use strict"


class Car {
    #make;
    #model;
    #_run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get #run () {
        return this.#_run;
    }

    set #run(run) {
        this.#_run = run;
    }

    info() {
        console.log(`Авто ${this.#make}${this.#model} с пробегом: ${this.#run} км.`)
    }

}

console.log("8.8. Домашнее задание - Классы")

const car1 = new Car('Tesla', 'Model S', 50000)
console.log(car1);
car1.info();

const car2 = new Car('Changan ', 'Uni V', 10000)
console.log(car2);
car2.info();

console.log("---Конец---")
