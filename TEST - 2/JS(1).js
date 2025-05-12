'use strict'
let User;
User = // User - Obj, {} - keys
{
    name : "Ivan",
    age: 25, // boolean, floust, int, BigInt
    country: "Belarus"
}

alert(`${User.name}, ${User.age}, ${User.country},`)
alert(`Привет, я ${User.name} и мне ${User.age} лет`)
console.log(User) // будет показывать в виде объкта
console.log(`${User.name}, ${User.age}, ${User.country}`)
console.log(`Привет, я ${User.name} и мне ${User.age} лет`)

// ===========================

let user2
console.log(user2) // Будет нулевое значение indefinet = null - ничего

// ===========================

const user3 = null
console.log(null) // «ничего», «пусто» или «значение неизвестно».

// ===========================
let user4 = 10; // boolean - всегда цифра
let ageVerefication1 = 10 >= 20 // лет
console.log(ageVerefication1) //consol ответит fakse
// user4, ему не больше 20 лет

// ===========================
let user5 = 10; // boolean - всегда цифра
let ageVerefication2 = 10 <= 20 // лет
console.log(ageVerefication2) //consol ответит true
// user5, ему больше 20 лет

// ===========================

// используем bigInt
//*(1)
let bank1 = 213651841354318643946661361846351n
let bank2 = 213651841354318643946661361846351n
alert(`bank1 (${bank1})  * bank2 (${bank2})  = ${bank1 * bank2}`)
console.log(`bank1 (${bank1})  * bank2 (${bank2})  = ${bank1 * bank2}`)

//*(2)

let bank3 = BigInt ("213651841354318643946661361846351");
let bank4 = BigInt ("213651841354318643946661361846351");
alert(`bank3 (${bank3})  * bank4 (${bank4})  = ${bank3 * bank4}`);
console.log(`bank3 (${bank3})  * bank4 (${bank4})  = ${bank3 * bank4}`);

// ===========================

let User6 = // мы создали объ и ключ
{
    name: "Dima",
    age: 25,
    country: "Belarus",
    isMarried: false,
}
alert(`${User6.name}, ${User6.age}, ${User6.country}, ${User6.isMarried},`)
console.log(`${User6.name}, ${User6.age}, ${User6.country}, ${User6.isMarried},`)

// ===========================

// математические операторы
let shop1 = 64968 
let shop2 = 1651613
let shop3 = 657635418
let shop4 = 6481980
let shop5 = 398287

let profit1 = shop1 + shop2 + shop3 + shop4 + shop5
let profit2 = shop1 - shop2 - shop3 - shop4 - shop5
let profit3 = shop1 * shop2 * shop3 * shop4 * shop5
let profit4 = shop1 / shop2 / shop3 / shop4 / shop5
let profit5 = shop1 % shop2 % shop3 % shop4 % shop5
let profit6 = shop1 ** shop2 ** shop3 ** shop4 ** shop5
alert(`shop1: ${profit1}  *  shop2: ${profit2}  *  shop3: ${profit3}  *  shop4: ${profit4}  *  shop5: ${profit5}  *  shop6: ${profit6}`)
console.log(profit1) // 666232266
console.log(profit2) // -666102330
console.log(profit3) // 1.821783661845564e+32
console.log(profit4) // 2.3168728057007947e-23
console.log(profit5) // 64968
console.log(profit6) // Infinity

// ===========================

// 1) (50-15)*7+18:3 - их остатки / 2
let number1 = 50;
let number2 = 15;
let number3 = 7;
let number4 = 18;
let number5 = 3;
//==
let allNumbers = number1 - number2 * number3 + number4 / number5
console.log(`(${number1} - ${number2}) * ${number3} + ${number4} / ${number5}`)
console.log(allNumbers) // 49
console.log(allNumbers / 2) // -24.5

// 2) (4**4 + 5**3):3**2 - их остатки / 2
let sum1 = 4**4
let sum2 = 5**3
let sum3 = 3**2
//==
let allSums = sum1 + sum2 / sum3
console.log(`(${sum1} + ${sum2})/${sum3}`)
console.log(allSums) // 269.8888888888889
console.log(allSums / 2) // 134.94444444444446

// ===========================

// -= += /= *=
// (1)
let a = 10
a += 5 // 10 + 5
console.log(a) // 15
// (2)
let b = 3
b -= 8 // 3 - 8
console.log(b) // -11
// (3)
let c = 38
c /= 65 // 38 / 65
console.log(c) // 0.5846153846153846
// (4)
let d = 948
d *= 651 //948 * 651
console.log(d) // 617148

//=============================

5 == '5'    // true (строка '5' преобразуется в число)
0 == false  // true (false преобразуется в 0)
null == undefined // true
let e = 7132
e == 984
console.log(e) // 7132

5 === '5'    // false (разные типы)
0 === false  // false (разные типы)
null === undefined // false

let x = 5;
x++;  // x = 6 (постфиксная форма)
++x;  // x = 7 (префиксная форма)

let a1 = 5;
let b1 = a1++; // b = 5, a = 6 (сначала присваивание, потом увеличение)

let c1 = 5;
let d1 = ++c1; // d = 6, c = 6 (сначала увеличение, потом присваивание)

let y = 10;
y--;  // y = 9 (постфиксная форма)
--y;  // y = 8 (префиксная форма)

for(let i = 0; i < 10; i++) {
    console.log(i);
  }

//=============================
//В первый день продали 25 арбузов,
// во второй - 40, а в третий день -  55 арбузов.
// Сколько всего арбузов продали за 3 дня?

let day1 = 25
let day2 = 40
let day3 = 55
console.log(`${day1 + day2 + day3}`) //120
//=============================
//Из автобуса на остановке вышло 6 пассажиров,
// а вошло 11. На следующей остановке вышло 8,
// а вошло 9. Сколько пассажиров в автобусе,
// если вначале было 24 пассажира?

let guys0 = 24
let guys1 = 6 // -
let guys2 = 11
let guys3 = 8 // -
let guys4 = 9
let allGuys = guys0 - guys1 + guys2 - guys3 + guys4
console.log(allGuys) // 30
console.log(`${guys0 - guys1 + guys2 - guys3 + guys4}`)
alert(`all passangers in a bus ${guys0 - guys1 + guys2 - guys3 + guys4}`)

//=============================
// Двадцать ящиков весят 3 тонны.
// Сколько килограммов весит один ящик?

let tn = 3 // штук
let kg = 1000 // 1тн - 1000кг
console.log("каждый ящик весит по - "+ tn * kg)

//=============================
// Конвертация - typeof
let value = true;
console.log(typeof value) // теперь, это boolean

value = Number(value) // теперь, это число 1
console.log(typeof value) // number

value = String(value) // теперь, это строка "1"
console.log(value) // string - 1

//=============================
// Создайте переменную со значением "ваше имя".
// При помощи конкатенации вывести в консоли строку
//  “Добро пожаловать ваше имя в IT Academy”

let usA = "Rustem"
console.log("Добро пожаловать " + usA +"," + " в IT Academy")
// Добро пожаловать Rustem, в IT Academy

//=============================
// 1) Создайте числовую переменную.  
// проверьте тип переменной

// 2) Запишите в эту переменную строковое значение. 
// проверьте тип переменной

// 3) Преобразуйте переменную при помощи операции
// Boolean(value).
// проверьте тип переменной

let num = 40
console.log("Создал числовую переменную " + typeof num) // number

num = String(num)
console.log(num) // string

num = Boolean(num)
console.log(typeof num) // boolean
console.log(num) // true

//=============================
// =============================
// строки так же могут преобразоваться в числа и разделяться
// Ответом будет 3
console.log("6" / "2")
// =============================
// исключением будет (+)
console.log("6" + 2) // будет 62
// =============================
//<==> true/false slide 1 js (38 slide)
// =============================
// Попросить пользователя ввести 2  числа (по очереди).
//  Посчитать сумму этих чисел и вывести
//  в alert результат
let num1 = Number(prompt('введите первое число'))
let num2 = Number(prompt('введите второе число'))
let sum = num1 + num2
alert(`вы ввели: ${num1}*${num2} = ${num1 + num2}`)

// =============================
// Спросить у пользователя "С какой скоростью едет мотоциклист? (км.ч)"
// Спросить у пользователя "Кокое расстояние должен преодолеть мотоциклист (км)?"
// Подсчитать через сколько часов приедет мотоциклист. (формула s / v = t)
// Вывести в alert фразу "Мотоциклист приедет через N часов"

let speed = Number(prompt("С какой скоростью едет мотоциклист? (км.ч)"))
let time = Number(prompt("Кокое расстояние должен преодолеть мотоциклист (км)?"))
let result1 = speed + time
alert("Мотоциклист приедет через " + result + " часов")

// =============================
//Необходимо попросить пользователя задумать число.
// Затем он должен умножить это число на 5
// и добавить 7.
// То что вышло в итоге пользователь
// должен ввести в prompt.
// А вы должны выдать пользователю,
// то число, которое он задумал первоначально.

// Получаем итоговый результат от пользователя
let result2 = parseFloat(prompt("Введите результат после умножения вашего числа на 5 и добавления 7:"));

// Проверяем, что введено число
if (isNaN(result2)) {
  alert("Вы ввели не число! Пожалуйста, обновите страницу и попробуйте снова.");
} else {
  // Вычисляем задуманное число: (result - 7) / 5
  let originalNumber = (result2 - 7) / 5;
  
  // Выводим результат
  alert(`Вы задумали число: ${originalNumber}`);
}