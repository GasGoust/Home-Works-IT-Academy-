function getColorName(input) {
    input = input.trim().toLowerCase();
    let color = 'Неизвестный цвет';
    
    // Проверка названий цветов через switch
    switch(input) {
        case 'red': color = 'Красный'; break;
        case 'orange': color = 'Оранжевый'; break;
        case 'yellow': color = 'Жёлтый'; break;
        case 'green': color = 'Зелёный'; break;
        case 'aqua': color = 'Голубой'; break;
        case 'blue': color = 'Синий'; break;
        case 'purple': color = 'Фиолетовый'; break;
        default:
            // Обработка HEX-кодов
            if(input[0] === '#' && (input.length === 4 || input.length === 7)) {
                let hex = input.slice(1);
                if(hex.length === 3) hex = hex.split('').map(c => c + c).join('');
                
                // Проверка HEX-значений через вложенные условия
                if(hex === 'ff0000') {
                    color = 'Красный';
                } else if(hex === 'ffa500') {
                    color = 'Оранжевый';
                } else if(hex === 'ffff00') {
                    color = 'Жёлтый';
                } else if(hex === '008000') {
                    color = 'Зелёный';
                } else if(hex === '00ffff') {
                    color = 'Голубой';
                } else if(hex === '0000ff') {
                    color = 'Синий';
                } else if(hex === '800080') {
                    color = 'Фиолетовый';
                }
            }
    }
    
    // Проверка через логические операторы
    if(color === 'Неизвестный цвет' && !confirm('Цвет не распознан! Показать как неизвестный?')) {
        return '';
    }
    
    return color;
}

// Обработчик ввода с использованием тернарного оператора
document.getElementById('colorInput').addEventListener('input', function(e) {
    const value = e.target.value;
    const result = value ? getColorName(value) : 'Введите цвет';
    
    document.getElementById('result').textContent = result;
    document.getElementById('colorBox').style.backgroundColor = 
        result.includes('неизвестный') || !value ? '' : value;
});