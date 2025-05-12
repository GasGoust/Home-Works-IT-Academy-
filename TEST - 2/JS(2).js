"use strict"
// ============================

//  Динамическая типизация

let str1 = String(null);  // "null" (строка из 4-х символов)
let str2 = String(8);     // "8" (строка, а не число)
console.log(String (str1)); // "string" (а не "object" или "null")
console.log(String (str2)); // "string" (а не "number")

// Конкатенация
let str3 = 5 + "" // "5"
let str4 = false + "" // false""
console.log(String(str3))
console.log(String(str4))

// Нумерация
let a  = Number(1) // 1
console.log(Number(a))

// Унарное уровнение
let num1 = +"8" // 8 - Если плюс будет выступать спереди
let num2 = +"null" // 0
let num3 = +"HI"
let num4 = +"One"
console.log(+'Infinity'); // Infinity
console.log(+ "num4") // NaN
console.log(+ "8") // 8
console.log(num1 + "8") // 88

// parseInt/ parseFloat
let speed = "12"
console.log(parseInt(speed)) // 12
console.log(parseFloat(speed)) // 12

// ============================

// if - else
let message1 = ("совершеннолетний")
let message2 = ("несовершеннолетний")
let userAge = (prompt("введите ваш возраст"))
if(userAge >= 18)
    {
        console.log(alert(message1))
    }
else
{
    console.log(alert(message2))
}

// ============================

//Попросить пользователя ввести число.
//Определите является ли число положительным.
//Если число положительное,
//то выведите сообщение «Ваше число > 0 »
//иначе «Ваше число < 0»

let number1 = (prompt("введите число: "))
let message3 = ("вы ввели некорректное число")
if(number1 >= 0)
    {
        console.log(alert(number1 + " положительное"))
    }
    else if (number1 <= 0)
    {
        console.log(alert(number1 + " отрицательное"))
    }
    else (number1 !==0) 
    {
        console.log(alert(message3))
    }
// // ============================

let userInput = prompt("введите число: ")
let number2 = Number(userInput)
if(isNaN(number2) || !isFinite(number2) || userInput.trim() !== String(number2))
    {
        console.log(alert("введите корректное число"))
    }
else 
{
    console.log(number2 > 0 ? alert("ваше число > 0") : number2 < 0 ? alert("ваше число < 0") : alert("ваше число = 0"))
}
// // trim удаляет пробелы
// // isFinite(number) уберает Infinity и -Infinity.

// ============================

let input = prompt("Введите число")
let number = Number(input)
let messageUse1 = ("четное число")
let messageUse2 = ("нечетное число")
let messageUse3 = ("число равна  0-лю")
let messageUse4 = ("не число")
if(!isNaN(number) || !isFinite(number) || input.trim() !== String(number))
{
    console.log(alert(messageUse4))
}
else
{
    console.log(number > 0? alert(messageUse1) : number > 0? alert(messageUse2) : alert(messageUse3))
}

// switch(typeof undefined)
// {
//     case "undefined":
//     console.log("переменная");
//     break;

//     case "number":
//     console.log("переменная число")
//     break;

//     case "string":
//     console.log("переменная строка")
//     break;

//     case "boolean":
//     console.log("тип данных")         
//     break;

//     default:
//     console.log("не существует (null)")
// }

// ============================