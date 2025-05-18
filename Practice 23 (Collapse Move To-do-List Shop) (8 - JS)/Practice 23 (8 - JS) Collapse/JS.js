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
const take = document.getElementById("take");
let isTake = false;
let offsetX, offsetY;

// Счетчик показывания перемещения
take.onmousedown = function(e)
{
  isTake = true;
  offsetX = e.clientX - take.getBoundingClientRect().left;
  offsetY = e.clientY - take.getBoundingClientRect().top;
  // console.log
  console.log("e.ClientX", e.clientX)
  console.log("getBoundingClientRect", take.getBoundingClientRect())

  // Прописываем стиль как в стиле CSS - через position
  take.style.position = "absolute";

  take.style.left = `${take.getBoundingClientRect().left}px`;
  take.style.top = `${take.getBoundingClientRect().top}px`;

  //Не выделять текст при перетаскивании
  e.preventDefault();
};

// Mouse move
document.onmousemove = function(e)
{
  if(!isTake) return;
  take.style.left = `${e.clientX - offsetX}px`;
  take.style.top = `${e.clientY - offsetY}px`;
};

document.onmouseup = function()
{
    isTake = false;
};