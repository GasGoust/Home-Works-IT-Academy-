document.addEventListener('DOMContentLoaded', function() {
    // 1. Функция для добавления в таблицу
    function addToShopList(product, price) {
        const table = document.getElementById('shopList');
        if (!table) return;
        
        const newRow = table.insertRow();
        const cellProduct = newRow.insertCell(0);
        const cellPrice = newRow.insertCell(1);
        
        cellProduct.textContent = product;
        cellPrice.textContent = price;
    }
    
    // Пример использования:
    addToShopList('Яблоки', '10 BYN.');
    addToShopList('Молоко', '3 BYN.');
    
    // 2. Добавление нумерованных абзацев
    const createBtn = document.getElementById('create-p');
    const parentContainer = document.getElementById('parent');
    let pCount = parentContainer.querySelectorAll('p').length; // Начальное количество
    
    createBtn.addEventListener('click', function() {
        pCount++;
        const newP = document.createElement('p');
        newP.textContent = `Элемент ${pCount}: новый абзац`;
        parentContainer.appendChild(newP);
    });
});