// Написать функцию, которая принимает массив.
// Все положительные числа в массиве сделать
// отрицательными (если было 5 - должен поменять на -5)

function negative(array)
{
    return array.map(num => num > 0 ? -num : num);
}

//вводим в консоль
const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = negative(numbers);

console.log(result);