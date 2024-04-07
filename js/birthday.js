"use strict"


/**
 * Функция будет использоваться для валидации возраста при регистрации пользователя на платформе или в приложении.
 *
 * @param date {string} Строка с датой рождения в формате "ГГГГ-ММ-ДД"
 * @returns {boolean} Функция должна возвращать true, если пользователю больше 14 лет, иначе false
 */

function ageValidate (date) {
    const birthdayDate = new Date(date)
    const nowDate = new Date()
    let diffYear = nowDate.getFullYear() - birthdayDate.getFullYear()
    const diffMonth = nowDate.getMonth() - birthdayDate.getMonth()
    const diffDays = nowDate.getDate() < birthdayDate.getDate()

    if(diffMonth < 0 || (diffMonth === 0 && diffDays > 0)) {
        diffYear--
    }

    return diffYear >= 14;
}

console.log('5.7. Домашнее задание - Даты и время')
console.log('1996 год:', ageValidate("1996-02-06"))
console.log('2014 год:', ageValidate("2010-04-06"))
console.log('--- Конец ---');