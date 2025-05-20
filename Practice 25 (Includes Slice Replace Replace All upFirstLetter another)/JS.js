// 1
const numbers = [4, -2, 5, 19, -130, 0, 10];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log("мин", min);
console.log("макс", max);

// 2
const numbers2 = [4, -2, 5, 19, -130, 0, 10];
let min2 = numbers2[0];
let max2 = numbers2[0];
for (const num2 of numbers2) {
  if (num2 < min2) min2 = num2;
  if (num2 > max2) max2 = num2;
}
console.log("min:", min2); // -130
console.log("max:", max2); // 19

// =============Round============
const numbers3 = [4, -2, 5, 19, -130, 0, 10];

// Округляем все числа
const roundedNumbers = numbers3.map(num3 => Math.round(num3));

// Находим min и max
const min3 = Math.min(...roundedNumbers); // -130
const max3 = Math.max(...roundedNumbers); // 19

console.log("Минимальное (с round):", min3);
console.log("Максимальное (с round):", max3);


// =============ceil============
const numbers4 = [4, -2, 5, 19, -130, 0, 10];

// Округляем все числа вверх
const ceiledNumbers = numbers.map(num4 => Math.ceil(num4));

// Находим min и max
const min4 = Math.min(...ceiledNumbers); // -130
const max4 = Math.max(...ceiledNumbers); // 19

console.log("Минимальное (с ceil):", min4);
console.log("Максимальное (с ceil):", max4); 

// =============Random============

const numbers5 = [4, -2, 5, 19, -130, 0, 10];

// Функция для получения случайного элемента массива
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Берём случайное число как начальное значение
let min5 = getRandomElement(numbers5);
let max5 = getRandomElement(numbers5);

// Проходим по массиву и сравниваем
for (const num5 of numbers5) {
  if (num5 < min5) min5 = num5;
  if (num5 > max5) max5 = num5;
}

console.log("Минимальное число (с random):", min5); // Например: -130
console.log("Максимальное число (с random):", max5); // Например: 19

// =============Random(2)============
const numbers6 = [4, -2, 5, 19, -130, 0, 10];

let min6 = Infinity;
let max6 = -Infinity;

// Пока не найдены min и max, выбираем случайные числа и проверяем
while (min6 === Infinity || max6 === -Infinity) {
  const randomIndex = Math.floor(Math.random() * numbers6.length);
  const currentNum = numbers6[randomIndex];
  
  if (currentNum < min6) min6 = currentNum;
  if (currentNum > max6) max6 = currentNum;
}

console.log("Минимальное число (рандомизированный поиск):", min6); // -130
console.log("Максимальное число (рандомизированный поиск):", max6); // 19
// const min = Math.min(...numbers); // -130
// const max = Math.max(...numbers); // 19