//  (1)
// через tongle
// let elem = document.querySelector(".Theme")
// elem.onclick = function()
// {
//     document.querySelector("body").classList.toggle("dark")
// };


//  (2)
// через add - remove
let elem = document.querySelector(".Theme"); // Берем ID
let themes = ["white", "dark", "red", "green", "blue", "yellow", "purple", "orange"]; // Порядок смены, а также вызов по TEG
let currentTheme = 0; // Выводит слова в скобках при помощи themes

elem.onclick = function() {
    // Удаляем предыдущий класс
    document.body.classList.remove(themes[currentTheme]);
    
    // Переходим к следующему (или первому, если дошли до конца)
    currentTheme = (currentTheme + 1) % themes.length;
    
    // Добавляем новый класс
    document.body.classList.add(themes[currentTheme]);
    
    // Меняем текст кнопки (опционально)
    elem.textContent = `Тема (${themes[currentTheme]})`;
};