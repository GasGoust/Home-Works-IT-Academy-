      const inputs = document.querySelectorAll("input[type='text']")
      const button = document.querySelector('button')

      button.addEventListener('click', e => {
       
      })

      document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll("input[type='text']");
    const button = document.querySelector('button');
    
    // Создаем список для To Do
    const todoList = document.createElement('ul');
    todoList.style.marginTop = '20px';
    todoList.style.width = '330px';
    document.body.appendChild(todoList);
    
    // 1. Функция добавления в To Do List
    function addToDoItem(text) {
        if (!text.trim()) return;
        
        const li = document.createElement('li');
        li.textContent = text;
        li.style.padding = '8px';
        li.style.borderBottom = '1px solid #eee';
        todoList.appendChild(li);
    }
    
    // 2. Функция валидации инпутов
    function validateInputs() {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.parentElement.classList.add('error');
                isValid = false;
            } else {
                input.parentElement.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // Обработчик клика на кнопку
    button.addEventListener('click', e => {
        if (validateInputs()) {
            // Добавляем данные из инпутов в To Do List
            inputs.forEach(input => {
                addToDoItem(`${input.name}: ${input.value}`);
                input.value = ''; // Очищаем поле после добавления
            });
        }
    });
    
    // Удаляем класс error при фокусе
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.remove('error');
        });
    });
});