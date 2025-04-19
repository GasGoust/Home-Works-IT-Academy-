// Типизация
// to Boolean
// null, 0, "" <- пустая строка, undefined, NaN.  = Всегда false 

// Если через NULL
// Не будет работать, тк в условии значение false
// let switcher = null;
// if(switcher)
//     {
//         console.log("working...")
//     }

// False/True
// Сработает, тк True = 1;
// let switcher = 1;
// if(switcher)
//     {
//         console.log("Working...")
//     }


// (!num) <- Если знак (!) спереди, то мы переворачивает значение
// Теперь это не false, а true!!!

//Example:
// console.log(!true) -> false
// console.log(!false) -> true

// Это читается как (!) - Нет

//Перемещеннная переменная в скобочки
//становится в Boolean