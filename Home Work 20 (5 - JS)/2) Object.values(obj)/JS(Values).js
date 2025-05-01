// Object.values(obj) – возвращает массив значений.

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
const values1 = Object.values(user);
console.log(values1); // ["John", 30, true]

// Через FOR - IN
const values2 = [];
for (let key in user)
    {
        values2.push(user[key]);
    }
console.log(values2); // ["John", 30, true]