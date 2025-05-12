let links = document.querySelectorAll(".menu li")
let tabs = document.querySelectorAll(".tabs .tab")

for(let i=0; i<links.length; i++)
    {
        links[i].onclick=()=>clickLink(i)
    }
    function clickLink(i)
    {
        document.querySelector(".menu li.active").classList.remove("active")
        links[i].classList.add("active")

        document.querySelector(".tabs .tab .active").classList.remove("active")
        links[i].classList.add("active")
    }
// Консоль проверить ID
// Получаем все div элементы с data-id
const data = document.querySelectorAll('li[data-id]');

// Добавляем обработчик клика для каждого div
data.forEach(div => {
    div.addEventListener('click', function(event) {
        // Выводим в консоль data-id элемента, по которому кликнули
        console.log('Вы кликнули на элемент с id:', this.dataset.id);
        
        // Удаляем класс box у всех элементов
        data.forEach(item => item.classList.remove('active'));
        
        // Добавляем класс box только к текущему элементу
        this.classList.add('active');
    });
});