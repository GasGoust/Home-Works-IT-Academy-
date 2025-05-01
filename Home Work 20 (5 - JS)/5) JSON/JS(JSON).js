//Преобразование JSONа в строку
const data1 = { name: "Alice", age: 25, isStudent: true };
const jsonString1 = JSON.stringify(data1);
console.log(jsonString1); // '{"name":"Alice","age":25,"isStudent":true}'

//Преобразование JSONа в объект
const jsonString = '{"name":"Alice","age":25,"isAdmin":false}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData.name); // "Alice"
console.log(parsedData.age); // 25

// Отправка через сервер fetch
// fetch('', { // там где ('') указывается строка сервера, например: https://example-server.com
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: "Alice", age: 25 })
//   });

// Читка файла через Node.js
// const fs = require('fs'); // fs - File System
// const rawData = fs.readFileSync('data.json', 'utf-8');
// const data2 = JSON.parse(rawData);
// console.log(data2); // { name: "Alice", age: 25 }