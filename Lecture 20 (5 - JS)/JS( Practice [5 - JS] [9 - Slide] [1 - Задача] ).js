// Написать функцию, которая принимает
// массив строк. Все строки, которые
// начинаются на букву ‘a’ заменить строкой ‘array’

function changeArray(arr)
{
    let newArray = [];
    for(let arrElement of arr)
        {   
            if(arrElement[0] == 'a')
                {
                    newArray.push(`array`)
                }
            else newArray.push(arrElement)
        }
        return newArray
}
console.log(changeArray(['apple', 'bananas', 'abricos', 'car', 'a', 'auto', '1,2,3,4,5' ]))