// const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pageSize = 3
function getPageItems(pageNum) {
const start = (pageNum - 1) * pageSize;
return allItems.slice(start, start + pageSize);

console.log(getPageItems(2)); // [4, 5, 6] (вторая страница)
}

var a=['A','B','C','D','E','F','G'];
console.log( a.splice(2,3) );
[ 'C', 'D', 'E' ]
console.log( a );
[ 'A', 'B', 'F', 'G' ]
console.log( a.splice(2,0,'q','r') );
[ ]
console.log( a );
[ 'A', 'B', 'q', 'r', 'F', 'G' ]
console.log( a.splice(3,1,'r1','r2') );
[ 'r' ]
console.log( a );
[ 'A', 'B', 'q', 'r1', 'r2', 'F', 'G' ]

// ===========================================================================
// l Удалите из массива [2, 5, 9] элемент 5.
// ==1==
const arr = [2, 5, 9];
const index = arr.indexOf(5); // Находим индекс элемента 5 (1)
if (index !== -1) { // Проверяем, что элемент найден
  arr.splice(index, 1); // Удаляем 1 элемент, начиная с индекса 1
}
console.log(arr); // [2, 9]

// 2  Дан следующий массив:   [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
// ==2==
const coins = [1, 2, 3, 4, 5];
// 1. Вставляем 'a' и 'b' после 1 (индекс 1)
coins.splice(1, 0, 'a', 'b'); 
// Теперь массив: [1, 'a', 'b', 2, 3, 4, 5]
// 2. Вставляем 'c' перед 5 (новый индекс 5 - после 4)
coins.splice(6, 0, 'c'); 
// Теперь массив: [1, 'a', 'b', 2, 3, 4, 'c', 5]
// 3. Добавляем 'e' в конец
coins.push('e');
console.log(coins); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// ==3==
// 3 Добавление нового элемента в середину списка
const users = ["Аня", "Боря", "Дима"];
// Вставляем "Вася" между "Борей" и "Димычем"
users.splice(2, 0, "Вася");
console.log(users); // ["Аня", "Боря", "Вася", "Дима"]
// ===========================================================================

// Метод ConCut
// Обьедините два массива [1, 2, 3, 4, 5] и ['orange', 'kiwi', 'apple']
var a=['Opel','BMW'];
var a2=['Lada','Zapor'];
console.log( a.concat(a2) );
[ 'Opel', 'BMW', 'Lada', 'Zapor' ]
console.log( a2.concat(a) );
[ 'Lada', 'Zapor', 'Opel', 'BMW' ]


let array = [1, 2, 3, 4, 5];
let string = ['orange', 'kiwi', 'apple'];
console.log(array.concat(string))


// Имеется исходный массив friends:
const friends = [
{ name: 'alex', pizzas: ['cheese', 'pepperoni'] },
{ name: 'mike', pizzas: ['salami', 'margarita'] },
{ name: 'stas', pizzas: ['meat'] },
{ name: 'anna', pizzas: ['fish'] }
];
// Напишите функцию, которая принимает массив объектов и возвращает только список всех пицц, которые могут заказать ребята. 
// Нужно получить результат в следующем формате:
// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish'];
function getAllPizzas(friendsArray) {
  return friendsArray.flatMap(friend => friend.pizzas);
}
const allPizzas = getAllPizzas(friends);
console.log(allPizzas);
// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish']

// =================== Альтенатива ===================
// const friends = [

//       { name: 'alex', pizzas: ['cheese', 'pepperoni'] },

//       { name: 'mike', pizzas: ['salami', 'margarita'] },

//       { name: 'stas', pizzas: ['meat'] },

//       { name: 'anna', pizzas: ['fish'] }
//   ];

// let a = []
// for (let key of friends) {
//   a = a.concat(key['pizzas'])
// }
// console.log(a)
// ====================================================

// Дан массив  ['kiwi', 'apple', 'kiwi',  'orange',  'orange',  'kiwi',  'kiwi', 'apple'];
// 1. Проверить содержится ли в нем элемент 'kiwi'
// 2. Узнать индексы элемента 'orange'
// 3. Создать массив без повторений  ['kiwi', 'apple',  'orange']

// ==1==
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'orange', 'kiwi', 'kiwi', 'apple'];
const kiwi = fruits.includes('kiwi');
console.log(kiwi); // true
// ==2==
const orange = [];
let currect = -1;
while ((currect = fruits.indexOf('orange', currect + 1)) !== -1)
{
  orange.push(currect);
}
console.log(orange); // [3, 4]
// ==3==
const allFruits = fruits.filter((fruit, index) => {
  return fruits.lastIndexOf(fruit) === index;
}).reverse();
console.log(allFruits); // ['kiwi', 'apple', 'orange']

// ==3== Альтернатива
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'orange', 'kiwi', 'kiwi', 'apple'];
// const uniqueFruits = [];
// for (const fruit of fruits) {
//   if (!uniqueFruits.includes(fruit)) {
//     uniqueFruits.push(fruit);
//   }
// }
// console.log(uniqueFruits); // ['kiwi', 'apple', 'orange']

// // ==3== Альтернатива (2)
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'orange', 'kiwi', 'kiwi', 'apple'];
// const uniqueFruits = [];

// fruits.forEach(fruit => {
//   if (!uniqueFruits.includes(fruit)) {
//     uniqueFruits.push(fruit);
//   }
// });
// console.log(uniqueFruits); // ['kiwi', 'apple', 'orange']