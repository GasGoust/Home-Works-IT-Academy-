// var s='Утром деньги, вечером стулья!';
// console.log( s.split(' ') );
// // [ 'Утром', 'деньги,', 'вечером', 'стулья!' ]
// ===============================================================
// var s2='Бендер';
// console.log( s2.split('') );
// // [ 'Б', 'е', 'н', 'д', 'е', 'р' ]
// ===============================================================
//Дана строка      "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек"
//Разделить строку по запятой на месяцы. Вывести массив
// let str = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек"
// console.log(str.split(' ') )
// ===============================================================
// Вывести строку ‘Дек,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя’
const monthsString1 = 'Дек,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя';
// 1. Разбиваем строку в массив по запятым
const monthsArray = monthsString1.split(',');
// 2. Меняем местами первый и последний элементы
const firstElement = monthsArray[0];
const lastElement = monthsArray[monthsArray.length - 1];
monthsArray[0] = lastElement;
monthsArray[monthsArray.length - 1] = firstElement;
// 3. Собираем массив обратно в строку
const result1 = monthsArray.join(',');
console.log(result1);
// Вывод: "Ноя,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Дек"
// ===============================================================
const monthsString = 'Дек,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя';
const monthsArray = monthsString.split(',');
// Меняем местами через деструктуризацию
[monthsArray[0], monthsArray[monthsArray.length - 1]] = 
[monthsArray[monthsArray.length - 1], monthsArray[0]];
const result2 = monthsArray.join(',');
console.log(result2);
// Вывод: "Ноя,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Дек"
// ===============================================================
const result3 = monthsString.split(',').map((e, i, arr) => 
  i === 0 ? arr[arr.length - 1] : 
  i === arr.length - 1 ? arr[0] : e
).join(',');
console.log(result3);
// Вывод: "Ноя,Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Дек"
