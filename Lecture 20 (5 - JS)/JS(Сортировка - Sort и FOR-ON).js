// 1-ый вариант сортировки sort
function sortArray(arr)
{
    arr.sort(function (a, b)
    {
        return a-b;
    })
    return arr
}
console.log(sortArray([4,9,2,4,1,8,3,4])) // [1, 2, 3, 4, 4, 4, 8, 9]

// 2-ой вариант сартировки for of (вместо: for in)
function sumArr(arr)
{
    let sum = 0;
    for(let element of arr) // element - элемент массива
        {
            sum+=element
        }
        return sum;
}

console.log(sumArr([4,9,2,4,1,8,3,4])) // [1, 2, 3, 4, 4, 4, 8, 9]
