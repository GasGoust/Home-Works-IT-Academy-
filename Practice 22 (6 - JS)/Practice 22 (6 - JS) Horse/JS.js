//---------------------------------
// Если только Лошадь
// let e = document.querySelector(".horse")
// e.onclick = function()
// {
//     document.querySelector("body").classList.toggle("box")
// }
//---------------------------------
// По очереди
document.querySelector(".horse").onclick = () =>
    {
        document.querySelector(".horse").classList.toggle("box")

    }

document.querySelector(".donkey").onclick = () =>
    {
        document.querySelector(".donkey").classList.toggle("box")

    }

document.querySelector(".cat").onclick = () =>
    {
        document.querySelector(".cat").classList.toggle("box")

    }

//Проверка клика
// for (let div of divs)
//     {
//         div.onclick = function(event)
//         {
//             console.log(event.target.parentElement.dataset)
//             console.log(event.target.parentElement.dataset.id)
//             if (div.classList.contains('box'))
//                 {
//                     div.classList.remove('box')
//                 }
//             else
//             {
//                 for (let i=0; i<divs.length; i++)
//                     {
//                         divs[i].classList.remove("box")
//                     }
//                 div.classList.add("box")
//             }
//         };
//     }

// Получаем все div элементы с data-id
const divs = document.querySelectorAll('div[data-id]');

// Добавляем обработчик клика для каждого div
divs.forEach(div => {
    div.addEventListener('click', function(event) {
        // Выводим в консоль data-id элемента, по которому кликнули
        console.log('Вы кликнули на элемент с id:', this.dataset.id);
        
        // Удаляем класс box у всех элементов
        divs.forEach(item => item.classList.remove('box'));
        
        // Добавляем класс box только к текущему элементу
        this.classList.add('box');
    });
});