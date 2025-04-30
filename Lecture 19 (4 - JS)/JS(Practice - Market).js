//1 класс
let market = {
    apples: 10, 
    oranges: 5,
    pears: 15,
    bananas: 0,
    lemons: 7
    }

// уточнение = Можно изменить количство
market.apples = 10
market.oranges = 5
market.pears = 15
market.bananas = 0
market.lemons = 20 // изменили количство лимонов на 20 вместо 7
delete market.bananas // удаление бананов

//2 класс
let info = prompt("Какой товар в нашем маркете вас интересует: apples, oranges, pears, bananas, lemons?")
console.log(market[info])

// условие
if(info in market)
    {
        alert(`${info} ${market[info]} шт. в маркете!`)
    }
else(info in market)
    {
        alert(`Что нибудь ещё? Нажмите на клавишу (F5)! Доброго вам дня =)`)
    }