// Собрать путь к файлу из частей. 
// Например дан массив const pathParts = ["src", "components", "Button.js"];
// Получить строку "src/components/Button.js"

let folder=['src','components','Button.js'];
console.log( folder.join(' / ') );
// src / components / Button.js
console.log( folder.join('') );
// src','components','Button.js

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Например 
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  return str
    .split('-') // разбиваем строку по дефисам
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ) // преобразуем все слова, кроме первого, в верхний регистр первой буквы
    .join(''); // объединяем массив обратно в строку
}
console.log(camelize("background-color"));    // 'backgroundColor'
console.log(camelize("list-style-image"));    // 'listStyleImage'
console.log(camelize("-webkit-transition"));  // 'WebkitTransition'

// ```
// html
// function camelize(str){
//             let words = str.split("-")
//             for (let i = 1;i< words.length;i++){
//                 console.log(words[i]);
//                 words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//             }
//             return words.join("");

//         }
//         console.log(camelize("background-color"));
//         console.log(camelize("-webkit-transition"))
// ```

// l  Дан следующий массив:  [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:  [1, 2, 3]
// l Дан массив

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// С помощью метода slice сделайте массив [ 'orange', 'kiwi', 'apple']

var a=['A','B','C','D','E','F','G'];
console.log( a.slice(3) );
[ 'D', 'E', 'F', 'G' ]
console.log( a.slice(3,5) );
[ 'D', 'E' ]
console.log( a.slice(3,-1) );
[ 'D', 'E', 'F' ]

let arr = [1, 2, 3, 4, 5]
console.log(arr.slice(0,3))

let fruit = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
console.log(fruit.slice(3))