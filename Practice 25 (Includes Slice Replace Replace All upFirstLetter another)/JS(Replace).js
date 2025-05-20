let str = "Утром деньги, вечером стулья"

console.log(str.replace("Утром", "RO"));
console.log(str.replaceall("Утром", "RO"));


// 1. Дана строка “Java is awesome. Java is fun.”

// А) Замените первое слово “Java” на “JavaScript”

// Б) Замените все  “Java” на “JavaScript”

// 2. Дана строка ‘1-2-3-4-5’. Поменяйте все дефисы на точки.

let strJava = "Java is awesome. Java is fun."
console.log(strJava.replace("Java","JavaScript"))
console.log(strJava.replaceAll("Java","JavaScript"))

let strNum = [1,2,3,4,5]
console.log(strNum.replace(",","."));
console.log(strNum.replaceAll(",","."));

// ===============
const strJava1 = "Java is awesome. Java is fun.";

// Заменяем только первое "Java"
const resultA = strJava1.replace("Java", "JavaScript");
console.log(resultA); 
// "JavaScript is awesome. Java is fun."

// Способ 1: replaceAll (проще и читаемее)
const resultB1 = str.replaceAll("Java", "JavaScript");
console.log(resultB1); 
// "JavaScript is awesome. JavaScript is fun."

// Способ 2: replace с регулярным выражением
const resultB2 = str.replace(/Java/g, "JavaScript");
console.log(resultB2); 
// "JavaScript is awesome. JavaScript is fun."

// ===============
const str2 = '1-2-3-4-5';

// Простая замена всех дефисов на точки
const result2 = str2.replaceAll("-", ".");
console.log(result2); 
// "1.2.3.4.5"

// ===============

const result2Alt = str2.replace(/-/g, ".");
console.log(result2Alt); 
// "1.2.3.4.5"