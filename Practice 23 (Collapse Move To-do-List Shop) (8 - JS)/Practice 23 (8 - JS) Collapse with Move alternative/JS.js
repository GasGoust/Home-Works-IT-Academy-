document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы toggle и spoiler
  const toggleElement = document.querySelector('.toggle');
  const spoilerElement = document.querySelector('.spoiler');
  
  // Добавляем обработчик клика на toggle
  toggleElement.addEventListener('click', function() {
    // Переключаем класс active у spoiler
    spoilerElement.classList.toggle('active');
    
    // Меняем текст в зависимости от состояния
    if (spoilerElement.classList.contains('active')) {
      toggleElement.textContent = 'свернуть';
    } else {
      toggleElement.textContent = 'развернуть';
    }
  });
});

// take
const take = document.getElementById("take"); // исправлено getElementById

if (take) { // проверяем, существует ли элемент
    let isTake = false;
    let offsetX, offsetY;

    take.onmousedown = function(e) {
        isTake = true;
        
        // Учитываем scroll страницы
        const rect = take.getBoundingClientRect();
        offsetX = e.clientX - rect.left + window.scrollX;
        offsetY = e.clientY - rect.top + window.scrollY;

        take.style.position = "absolute";
        take.style.left = `${rect.left + window.scrollX}px`;
        take.style.top = `${rect.top + window.scrollY}px`;

        e.preventDefault();
    };

    document.onmousemove = function(e) {
        if (!isTake) return;
        take.style.left = `${e.clientX - offsetX + window.scrollX}px`;
        take.style.top = `${e.clientY - offsetY + window.scrollY}px`;
    };

    document.onmouseup = function() {
        isTake = false;
    };
} else {
    console.error("Элемент с id='take' не найден");
}