"use strict"

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function () {
    console.log(
        `Персонаж: ${this.name}. Расса: ${this.race.toLowerCase()}. Говорит на: ${this.language}`)
}

/*
    - Создание конструктора для класса Орк
    - Явный вызов конструктора Character через метод call() и передача в него аргументов
    - Наследование через Object.create()
    - Раса передается статично, так как класс определяет название расы
    - Создание дополнительного метода для удара
 */
const Orc = function (name, language, weapon) {
    Character.call(this, 'Орк', name, language);
    this.weapon = weapon;
}
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.hit = function () {
    console.log(`${this.race} ${this.name} ударил больно оружием: ${this.weapon}`)
}

/*
    - Создание конструктора для класса Эльф
    - Явный вызов конструктора Character через метод call() и передача в него аргументов
    - Наследование через Object.create()
    - Раса передается статично, так как класс определяет название расы
    - Создание дополнительного метода для заклинания
 */
const Elf = function ( name, language, castType){
    Character.call(this, 'Эльф', name, language);
    this.castType = castType;
}

Elf.prototype = Object.create(Character.prototype)

Elf.prototype.cast = function () {
    console.log(`${this.race} ${this.name} великолепно скастовал заклинание: ${this.castType}`)
}





// Орк и его возможности
const orc = new Orc('Мек', 'Оркиш', 'палка')
orc.speak()
orc.hit()

// Эльф и его возможности
const elf = new Elf('Йорвет', 'Старшая Речь', 'огонь')
elf.speak()
elf.cast()