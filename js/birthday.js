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

    if (nowDate.getFullYear() - birthdayDate.getFullYear() <= 14) {
        return  false
    }
    return true
}

console.log(ageValidate("1996-02-06"))