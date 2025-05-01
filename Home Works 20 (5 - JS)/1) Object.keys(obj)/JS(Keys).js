// Получение массив ключей
//------------------------------
// Получение
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
const keys1 = Object.keys(user);
console.log(keys1); // ["name", "age", "isAdmin"]
//------------------------------
// Через цикл For - IN
const keys2 = [];
for (let key in user) {
  keys2.push(key);
}
console.log(keys2); // ["name", "age", "isAdmin"]
