function printMessage(str)
{
    console.log("Hello " + str);
}
//вызываем ее название
printMessage("It");
printMessage("World");
printMessage("PlayStation");
//------------------------------

function promptMessage(name)
{
    console.log("Hello " + name + "!")
}

printMessage("Rustem")
//------------------------------

function promptMessage(int, inc, ) // string(str) + increment
{
    console.log(inc + " Hello " + int) // 1,2,3,
}
promptMessage("Roma ",  1.);
promptMessage("Anna ",  2.);
promptMessage("Alex ",  3.);
//--------------------------------

function showMessage(text)
{
    if(text === indefined) // отсутствует
        {
            text = 'пустое сообщение'
        }
        console.log(text);
}
showMessage(); // пустое сообщение
//---------------------------------

//Локальные и глобальны переменные
let userName = "Вася"; // Глобальная переменная

function showMessage()
{
    let message = "Привет, " + userName; // Локальная переменная, бо внутри фигурных скобок
    console.log(message);
}
//----------------------------------

// change message
let nameIs = "Rustem"
function printMessage(str, inc, ) // 1, 2,
{
    console.log(inc + " Hello " + str);
}
function changeMessage()
{
    nameIs ="Alex";
}
printMessage(nameIs, 1);
changeMessage();
printMessage(nameIs, 2);