function printMessage(name) // Глобальная переменная NAME
{
    console.log(" Hello " + name + "!"); // Локальная переменная
}
printMessage (" Rustem ")
//-----------------------------

let userName = " Rustem ";
function printMessage(str, inc,)// 1, 2
{
    console.log(inc, + " Hello! " + str);
}
function changeMessage()
{
    userName = " Alex ";
}
printMessage(userName, 1);
changeMessage();
printMessage(userName, 2);