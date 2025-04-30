// 17 слайд (19 лекции, 4 - JS) - Сделать!

// Задача №1
// Напишите функцию, которая принимает массив любых значений
// и добавляет новый элемент в конец этого массива.
// Возвращает полученный массив.

let array = [1,2,3,'string',5,6,['a','b','c']/*7*/] // длина массива 7
//           0,1,2,    3    4,5       6        7

// arr || array и добавляет новый элемент в конец этого массива через запятую
function addNewElement(array, newElement)
{
    // массив (array) = обращается к длине всех массивов[array.length] 
    array[array.length] = newElement
    // Возвращает полученный массив
    return array
}
//вызываем для проверки
// addNewElement(array, 'SOS')

// выводим на консоль
let newArray = addNewElement(array, "SOS-1")
console.log(newArray)

// Эксперментируем
//1
const newArray1 = addNewElement(newArray, "SOS-2");
//2
const newArray2 = addNewElement(newArray1, "SOS-3");
// Таким образом мы добавляем в длинну массив

//+++++++++++++++++++++++++++++++++++++++++++++++

// Задача №2
// Напишите функцию isValid(), которая принимает
// строку и проверяет ее длину. Если длина строки
// больше 8 и меньше 32 - то возвращать true,
// иначе false
let string = "Test string"
function isValid(string)
{
    if (string.length < 8 || string.length > 32)
        {
            return false
        }
        else return true
}
// вызываем для проверки
// isValid(string)

// выводим на консоль
console.log(isValid(string))
console.log(isValid('string'))
console.log(isValid("1234567"))
console.log(isValid("qwertyuiopasdfghjklzxcvbnm12345678910111213"))
//+++++++++++++++++++++++++++++++++++++++++++++++

// Array methods with functions

// -- объединяющие массивы
// 1) concat() - Соединения одних массивов с другими
// [1,2,3,4].concat([9,8,7,6])
let arrConcat = [1,2,3,4].concat([[9,8,7,6]])
console.log(arrConcat)
// 2) join() объединяет все элементы массива в строку.

// -- конечные массивы
// 3) pop() удаляет последний элемент из массива и возвращает его значение
arrConcat.pop("333")
console.log(arrConcat)
// 4) push() добавляет один или более элементов в конец массива и возвращает новую длину массива
arrConcat.push("333") // синоним: arr[arr.length] = "333"
console.log(arrConcat)

// -- начальные массивы
// 5) shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива
arrConcat.shift("1")
console.log(arrConcat)
// 6) unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива
arrConcat.unshift("Rustem")
console.log(arrConcat)
//+++++++++++++++++++++++++++++++++++++++++++++++

// Задача №3
