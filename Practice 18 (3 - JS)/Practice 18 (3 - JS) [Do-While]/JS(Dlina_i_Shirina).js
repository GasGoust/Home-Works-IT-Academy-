// попросить пользователя ввести длину и ширину прямоугольника
// от 1 до 10
// Запрашивать эти величины до тех пор, по ка пользователь не введет 
// корректное число

let width;
let height;
do
{   //Условие:
    alert("Нужно ввести корректные числа, чтобы получился квадрат")
    width = +prompt('Ширину');
    height = +prompt('Высота');
    //!width || !height - Убераем пустые строки
} while(!width || !height || width < 0 || width > 10 || height < 0 || height > 10);

// Псоел того, как команды вышли из цикла
alert("Вы указали корректные числа!")