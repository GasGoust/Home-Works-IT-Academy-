// Попросить пользователя ввести месяц рождения.
// В зависимости от месяца определить в какую пору года он родился.
// Если данные не корректные - вывести предупреждение, а иначе вывести:
// “Вы родились зимой\весной\летом\осенью”

let num = prompt("Ввести число месяца рождения");
//12 месяцев
if(num < 1 || num > 12){}

else if( num == 1 || num == 12||num == 2)
    {
        // in a winter
    }
else if( num == 3 || num == 4||num == 5)
    {
        // in a string
    }
else if( num == 6 || num == 7||num == 8)
    {
        // in a summer
    }
else if( num == 9 || num == 10||num == 11)
    {
        // in a autumn
    }

switch (+num)
{
    case 1:
    case 12:
    case 2:
    case "Dec":
    case "Jan":
    case "Fev"://и так далее

    console.log("winter");
    brake;
    case 3:
    case 4:
    case 5:
    console.log("string");
    brake;

    case 6:
    case 7:
    case 8:
    console.log("summer");
    brake;

    case 9:
    case 10:
    case 1:
    console.log("autumn");
    brake;
}
// switch (num)
// {
//     case 3:
//     case 4:
//     case 5:
//     console.log("string");
//     brake;
// }
// switch (num)
// {
//     case 6:
//     case 7:
//     case 8:
//     console.log("summer");
//     brake;
// }
// switch (num)
// {
//     case 9:
//     case 10:
//     case 1:
//     console.log("autumn");
//     brake;
// }

if(num<1||num>12) console.log("Данные неверные!")
else console.log("Данные корректные!")

// условие ? выражение если истина : выражение если ложь
(num<1||num>12) ? console.log("Данные неверные!") : console.log("Данные корректные!")