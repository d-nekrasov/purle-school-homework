"use strict"

/**
 *  Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto
 *
 *  После получения, получите информацию о первой его ability по ссылке, которая приходит в первом запросе.
 *  Найдите описание на английском и выведете в консоль
 *
 *  Последовательные Запросы:
 *  - Демонстрация создания первого запроса к API для получения данных о покемоне Ditto.
 *    Эндпоинт: v2/pokemon/ditto.
 *  - Полное описание процесса получения данных о способности покемона (ability) из первого запроса.
 *    Получение URL способности из ответа сервера.
 *
 *  Второй Запрос и Операции с Данными:
 *  - Создание второго запроса для получения дополнительной информации об ability по полученному URL.
 *    Эндпоинт: второго запроса формируется динамически на основе данных первого запроса.
 *
 *  - Описание методики поиска нужной информации на английском языке в ответе и её вывод в консоль.
 */


//


getPokemonAbilityInfo('ditto', 'en')

function getPokemonAbilityInfo(name, lang) {
    const url =
    getData(`https://pokeapi.co/api/v2/pokemon/${name}`, 'Pokemon not found')
        .then(response => {
            const { abilities } = response
            const abilityInfoURL = abilities?.[0]?.ability?.url
            return getData(abilityInfoURL, 'Pokemon ability not found')
        })
        .then(response => {
            const { effect_entries } = response
            const effectDescription = effect_entries.find(element => element?.language?.name === lang)?.effect
            console.log(effectDescription)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log('Run something after the request')
        })
}


function getData(url, errorMessage){
    return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(errorMessage)
            }
            return response.json()
        })
}