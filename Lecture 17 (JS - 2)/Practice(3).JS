// let input = prompt("Введите длину и ширину прямоугольника");
//Проверка на пустую строку
// if (input === null || input.trim() === "")
// {
//     console.log("Ничего не ввели!");
// }
// else 
// {
//     let num = Number(input);
// }
//Буквы
// if(isNaN(num))
// {
//     console.log("Пишите цифры!")
// }
// < 1
// else if (num<1)
// {
//     console.log("Число < 1")
// }
// > 10
// else if (num>10)
// {
//     console.log("Число > 10")
// }
// от 1 до 10
// else {
//     console.log("Правильно!");
// }

//-------------------------------------------
// let num = prompt ("Введите число");
// console.log(num);
// if(isNaN(num)|| +num<1 || +num>99)
//     {
//         console.log("Неверно!")
//     }
//     else
//     {
//         console.log("Гуд!");
//         let num2 = prompt("Введите второе число!");
//         if(isNaN(num2) || +num2 <1 || +num2>99)
//             {
//                 console.log("Неверно!")
//             }
//         else
//         {
//             console.log("Всё Всё ГУД!")
//         }
//     }
//-------------------------------------------
let length = prompt("Введите длину (1-10):");
let width;
let valid = true;

// Проверка длины
if (length === null) {
    console.log("Ввод длины отменен!");
    valid = false;
} else if (length.trim() === "") {
    console.log("Длина не введена!");
    valid = false;
} else if (isNaN(length)) {
    console.log("Длина должна быть числом!");
    valid = false;
} else if (Number(length) < 1 || Number(length) > 10) {
    console.log("Длина должна быть от 1 до 10!");
    valid = false;
}
// Если длина валидна, проверяем ширину
if (valid) {
    width = prompt("Введите ширину (1-10):");
    
    if (width === null) {
        console.log("Ввод ширины отменен!");
        valid = false;
    } else if (width.trim() === "") {
        console.log("Ширина не введена!");
        valid = false;
    } else if (isNaN(width)) {
        console.log("Ширина должна быть числом!");
        valid = false;
    } else if (Number(width) < 1 || Number(width) > 10) {
        console.log("Ширина должна быть от 1 до 10!");
        valid = false;
    }
}
// Если оба значения корректны
if (valid) {
    const numLength = Number(length);
    const numWidth = Number(width);
    const area = numLength * numWidth; //76-78
    
    if (numLength === numWidth) {
        console.log(`Площадь квадрата равна ${area}`);
    } else {
        console.log(`Площадь прямоугольника равна ${area}`);
    }
}