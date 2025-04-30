//shift pop push unshift 
// Попросить пользователя заполнить массив
// 10-ю значениями. 

// Создаем пустой массив
let userArray = [];

// Заполняем массив 10 значениями через prompt
for (let i = 0; i < 10; i++) {
  let userInput = prompt(`Введите элемент #${i + 1}:`);
  userArray.push(userInput); // Добавляем введенное значение в массив
}

// Выводим результат в консоль
console.log("Ваш массив:", userArray);