//Bubble sort
function bubbleSort (arr)
{
    for (let i = 0; i < arr.length; i++)
        {
            for (let j = 0; j < arr.length - i - 1; j++)
                {
                    if (arr[j] > arr[j + 1])
                        {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем местами
                        }
                }
        }
    return arr;
}
    console.log(bubbleSort([6,7,4,2,8,9,0])); // [2,4,6,7,8,9]
    