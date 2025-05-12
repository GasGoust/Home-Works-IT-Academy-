//---------------------add-remove----------------------------
// Изменения темы
function darkTheme()
{
    document.querySelector(".box").classList.add("dark")
    document.querySelector(".box").classList.remove("white")    
}

function whiteTheme()
{
    document.querySelector(".box").classList.add("white")
    document.querySelector(".box").classList.remove("dark")    
}
//---------------------add-remove----------------------------
// Либо всё боди
// function darkTheme()
// {
//     document.body.classList.add("dark")
//     document.body.classList.remove("white")    
// }

// function whiteTheme()
// {
//     document.body.classList.add("white")
//     document.body.classList.remove("dark")    
// }
//------------------------toggle-------------------------
// Либо одна кнопка - Деффолт (белый фон)
function changeTheme()
{
    document.querySelector(".box").classList.toggle("dark")   
}
//-------------------contains-remove----------------------
// Либо одна кнопка - Деффолт (белый фон)
// function changeTheme()
// {
//     if (document.body.classList.contains("dark"))
//         {
//             document.body.classList.remove("dark")
//         }
// }