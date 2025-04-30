// name, age, adress - это ключ, а после (:) - является значением
let user = 
{ // typeof - string, number, boolean, object, funcion, undefiend
    name: "Rustem", //string
    age: 30,        //boolean
    adress: {city: 'Brest', street: "Shewchenko"},   //object, тк {}/[]/newObject
    getAdress: function () // анонимная функция, как (private)
    {
        console.log("Hello")
        return 0;
        // return console.log("Hello") 
    } // тоже является object, в нем будем исполнять ООП
};

// объект можно создать так через newObject, например:
// let user1 = newObject(); и обязательно через () такие скобки

//  И если отдельно прописать getAdress - то функция будет ссылать на user через getAdress
user.getAdress()
let userObj = 
{
    name:"Ilyas",
    age: 21,
    "like boss": true //boolean
}
console.log(user.getAdress()), // а в 9 строке напишем return console.log("Hello")
console.log(user.adress),
// если прописать просто слово adress через (.), то мы через user обратимся в adress
// user.adress - можно сделать проверку
//---
//ну и так-же можно обратиться к другим Obj name
console.log(user.name), // Rustem
// так-же через [] скобки
console.log(user['name']); // Rustem

//Обращаемся к рператору in, чтобы узнать есть ли какой то ключи внутри объекта
console.log("isMarried" in user) // теперь ифнформация будет писать отдельно в консоле, без слово isMarried - а сразу значение

//в консоле должно появится:
// Hello
// JS(OOP).js:9 Hello
// JS(OOP).js:26 0
// JS(OOP).js:27 Object
// JS(OOP).js:32 Rustem
// JS(OOP).js:34 Rustem


// Чтобы пользователь узнал всю информацию
let userInfo = prompt("Узнать name/age/adress/Married?")
console.log(user[userInfo]); // теперь в консоле можно будет узнать полную прописанную info

//Добавляем новые свойства
user.isMarried = true;   // правда женат или не женат, если false
console.log(user);

//также можно удалить одно из свойств
delete user.isMarried
console.log(user); // теперь isMerried не отображается в консоли


//--------подытожим
let a=5;
let b=a //5

a=10
console.log(a);
console.log(b);
// таким образом, с каждой новой строки вы проводите изменения значений и свойств, как в букве a, но при этом b - осталось с прежним значением
// в консоле будут
// 10
// 5

//-------------------

//---Запишем новый Obj
let info1 = 
{
    1:1,
    2:2,
}
let info2 = info1 // {1:1, 2:2}
// info1 = 
// {
//     3:3,
//     4:4,
// }
// также можно написать таким образом
info1['1'] = "111" // мы сейчас сделали копирование по ссылке
console.log("info1", info1)
console.log("info2", info2)

//-------------------
