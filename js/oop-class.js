"use strict"

/*
    1. Создание Базового Класса "Персонаж":
    Параметры класса: Раса, Имя, Язык.
    Метод: Говорить (можно сделать приватным на ваше усмотрение).

    2. Наследование и Расширение Класса "Персонаж":
    Создание класса "Орк":
    Новый параметр: Оружие.
    Новый метод: Удар.
    Преопределить метод "Говорить" специфично для Орка.

    3. Создание класса "Эльф":
    Новый параметр: Заклинание.
    Новый метод: Создать Заклинание.
    Преопределить метод "Говорить" специфично для Эльфа.
 */



class Character {
    race;
    name;
    language;

    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`Персонаж: ${this.name}. Расса: ${this.race.toLowerCase()}. Говорит на: ${this.language}`)
        return this;
    }
}

class Orc extends Character {
    #weapon;
    constructor(name, language, weapon) {
        super('Орк', name, language);
        this.#weapon = weapon
    }

    hit(){
        console.log(`Орк ${this.name} ударил больно оружием: "${this.#weapon}"`)
        return this;
    }
    speak() {
        console.log(`Орк по имени ${this.name} кричит на языке: ${this.language}`)
        return this;
    }
}

class Elf extends Character {
    #spell;
    constructor(name, language, spell) {
        super('Эльф', name, language);
        this.#spell = spell
    }

    cast() {
        console.log(`${this.race} ${this.name} великолепно скастовал заклинание: ${this.#spell}`)
        return this;
    }

    speak() {
        console.log(`Эльф по имени ${this.name} красиво говорит на языке: ${this.language}`)
        return this;
    }
}

const char = new Character('Человек', 'Рагнар', 'английский').speak()
const orc = new Orc('Флавий', 'Оркиш', 'Дубинка').speak().hit()
const elf = new Elf('Йорвет', 'Старшая Речь','Лед').speak().cast()