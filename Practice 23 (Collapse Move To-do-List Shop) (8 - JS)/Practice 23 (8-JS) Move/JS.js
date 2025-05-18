const draggable = document.getElementById("draggable");
let isDragging = false;
let offsetX, offsetY;

// Перетаскиваем
draggable.onmousedown = function(e) {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top; // Исправлено на offsetY
    console.log("e.clientX", e.clientX)
    console.log("getBoundingClientRect", draggable.getBoundingClientRect())


    // Добавляем стиль position: absolute для свободного перемещения
    draggable.style.position = "absolute";
    // Фиксируем текущие координаты
    draggable.style.left = `${draggable.getBoundingClientRect().left}px`;
    draggable.style.top = `${draggable.getBoundingClientRect().top}px`;
    
    // Предотвращаем выделение текста при перетаскивании
    e.preventDefault();
};

// mouse move
document.onmousemove = function(e) {
    // console.log(e) - mouse event
    if(!isDragging) return;
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
};

document.onmouseup = function() {
    isDragging = false;
};