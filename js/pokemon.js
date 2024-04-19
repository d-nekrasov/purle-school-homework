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

getPokemonAbilityInfo('ditto', 'en')
function getPokemonAbilityInfo(name, lang){
    const request = new XMLHttpRequest()
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${name}`)
    request.send()

    request.addEventListener('load', function (){
        const { abilities } = JSON.parse(this.responseText)
        let abilityInfoURL = abilities?.[0]?.ability?.url
        const abilityRequest = new XMLHttpRequest()
        abilityRequest.open('GET', abilityInfoURL)
        abilityRequest.send()

        abilityRequest.addEventListener('load', function(){
            const { effect_entries } = JSON.parse(this.responseText)
            const effectDescription = effect_entries.find(element => element?.language?.name === lang)?.effect
            console.log(effectDescription)
        })
    });
}
