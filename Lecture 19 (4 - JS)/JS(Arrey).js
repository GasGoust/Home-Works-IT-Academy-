// ARRAY || array || arr
// let array = [1,2,3,4]
// или
let array = [1,2,3,'string',5,6,['a','b','c']]
//           0,1,2,    3    4,5       6
// чтобы обратиться к каждой строке, нужно прописывать цифры в соответствии с массивом
array[0] // обратились к [1]
array[6] // обратились к ['a','b','c']
array[3] // обратились к ['string']
array[6][1] // обратились к букве ['b'] - тк посчет с 0-ля

//---
let arr = [1,2,3,'string',5,6,['a','b','c'],{name:1, count: 2}]
//           0,1,2,    3    4,5       6              7
arr[7].name // будет 1 - тк string, а подсчет у string c 1
arr[7]['3'] // будет слово count, тк подсчет у string c 1
console.log(arr[7]['3'])
// ---

// так-же можно узнать длинну массива через length
array.length // обращается в самый конец строки - будет 7

// Добавляем массив в нашу строку
array[10] = '123'
console.log(array)

// Заменяем массивы
array[6] = `new Element` // Теперь вместо [abc] -> [new element]
console.log(array)

// STRING || string || str
let string = "Test string" // пробел тоже считается как символ Test_string
console.log("_" + string[4]) // мы укажем что здесь есть пробел
console.log(string[4]) // мы через [4] указали что здесь есть пробел, в консоли будет пусто, тк (пробел)

// можно также указать через массив
console.log("_" + array[4]) // таким вот образом, массив укажет на следующий массив [5]
console.log(array[4]) // укажет на следующий массив [5]

// добавляем = изменить в string ничего нельзя! В отлии от массива
string[11] = "+ development" // будет: Test string
console.log(string)