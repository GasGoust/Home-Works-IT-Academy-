// Напишите функцию, которая подсчитывает
// сумму элементов числового массива и возвращает ее. 


function sumArray (arr)
{
    let sum = 0; // локальная (sum) переменная, она внутри функции    
    for (let i = 0; i < arr.length; i++)
        {
            // сумму складываем в массив
            sum+=arr[i]
        }
        return sum;
}

let sum = sumArray([1,2,3,4,5,6]) // глабольная (sum) вне функции, везде
console.log(sum) // 21
console.log(sumArray([1,2,3,4,5,6])) // 21