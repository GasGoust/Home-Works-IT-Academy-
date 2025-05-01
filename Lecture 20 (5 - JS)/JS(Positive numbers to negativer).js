// Напишите функцию, которая заменяет
// знаки чисел массива на противоположные
// и возвращает новый массив

function newArray (arr)
{
    for (let i = 0; i < arr.length; i++)
        {
            arr[i] = -arr[i]
        }
        return arr;
}

let array1 = newArray([1,2,3,4,5,6])
console.log(array1) // -1,-2,-3,-4,-5
console.log(newArray([1,2,3,4,5,6])) // -1,-2,-3,-4,-5
// либо наоборот
let array2 = newArray([-1,-2,-3,-4,-5,-6])
console.log(array2)
console.log(newArray([-1,-2,-3,-4,-5,-6]))
// либо в перемешку