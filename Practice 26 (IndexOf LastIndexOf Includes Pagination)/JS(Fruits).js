// ============================================================
// Дан массив
//  const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Написать скрипт, который определит сколько раз каждый элемент встречается в массиве.
// Вывод:  {kiwi: 3, apple: 2, orange: 1}
// ==1
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const count = {};
for (const fruit of fruits) {
  if (count[fruit]) {
    count[fruit] += 1;
  } else {
    count[fruit] = 1;
  }
}
console.log(count); // { kiwi: 3, apple: 2, orange: 1 }

// // ==2
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count); // { kiwi: 3, apple: 2, orange: 1 }
// ============================================================