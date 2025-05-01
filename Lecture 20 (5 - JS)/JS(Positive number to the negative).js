// Напишите функцию, которая заменяет
// знаки чисел массива на противоположные
// и возвращает новый массив

function sumNegative(arr)
{
    return arr.map(num => num > 0 ? -num : num);
}

const numbers = [1,2,3,4,5]
const result = sumNegative(numbers);
console.log(result)
