// // Подсчет всех цен! - например выручка

// //1 class
// let market = {
//     apples: 10, 
//     oranges: 5,
//     pears: 15,
//     bananas: 0,
//     lemons: 7,
//     };

// //2 class - Создаем новую переменную sum для посчёта всей суммы
// let sum1 = 0;

// // Цикл  for для подсчёта всей суммы товара
// for(let key in market)
//     {
//         sum1 += market[key]
//     }
//     console.log(sum1);
// // Теперь в консоли будет отобразаться полная сумма всех цен

//-------------------
//1 class Shop1
const Shop1 =
{
    iphone: {count: 5,price: 15},
    sumsung: {count: 5, price: 15},
    nokia: {count: 4, price: 8},
    motorolla: {count: 9, price: 20},
};
//2 class Shop2 - в терминале будет 68 (Shop2)
const Shop2 =
{
    vivo: 15,
    xiaomi: 15,
    huawei: 8,
    poco: 12,
    readmi: 18,
};
//3 class sum
let sum2 = 0;

// чтобы обратиться к конкретно к определенному телефону
// Shop.iphone.count или Shop.iphone.count.price и так далее


Shop2.vivo.count
// цикл for для Shop2
for(let key in Shop2)
    {
        // sum2 = sum2 + Shop2[key] или...
        sum2 += Shop2[key]
    }

// цикл for для Shop1
for(let key in Shop1)
    {
        // 1) ${key} - название телефона
        // 2) ${key} - count
        // 3) ${key} - price
        // 4) обязательные ковычки для посчета (``)
        // 5) подсчет ведется обычным способом (+-*/)

        // console.log(`Цена за ${key} = ${Shop1[key].count} * ${Shop1[key].price} = ${Shop1[key].count * Shop1[key].price}`)
        //  либо...
        let resultByShop1 = Shop1[key].count * Shop1[key].price;
        console.log(`Цена за ${key} = ${Shop1[key].count} * ${Shop1[key].price} = ${resultByShop1}`)
    }
// выводим    
console.log(sum2)