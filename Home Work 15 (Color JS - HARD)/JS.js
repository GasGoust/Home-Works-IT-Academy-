const colorMap = {
    // Красный
    'red': 'Красный',
    '#ff0000': 'Красный',
    '#f00': 'Красный',
    
    // Оранжевый
    'orange': 'Оранжевый',
    '#ffa500': 'Оранжевый',
    
    // Желтый
    'yellow': 'Жёлтый',
    '#ffff00': 'Жёлтый',
    '#ff0': 'Жёлтый',
    
    // Зеленый
    'green': 'Зелёный',
    '#008000': 'Зелёный',
    
    // Голубой
    'aqua': 'Голубой',
    '#00ffff': 'Голубой',
    '#0ff': 'Голубой',
    
    // Синий
    'blue': 'Синий',
    '#0000ff': 'Синий',
    '#00f': 'Синий',
    
    // Фиолетовый
    'purple': 'Фиолетовый',
    '#800080': 'Фиолетовый'
};

function normalizeHex(hex) {
    hex = hex.toLowerCase().replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    return '#' + hex;
}

function detectColor(input) {
    input = input.trim().toLowerCase();
    
    // Прямое совпадение
    if (colorMap[input]) {
        return colorMap[input];
    }
    
    // Попробуем нормализовать HEX
    if (/^#?[0-9a-f]{3,6}$/i.test(input)) {
        const normalized = normalizeHex(input);
        return colorMap[normalized] || 'Неизвестный цвет';
    }
    
    return 'Неизвестный цвет';
}

// Обработчик ввода
document.getElementById('colorInput').addEventListener('input', function(e) {
    const input = e.target.value;
    const colorName = detectColor(input);
    const resultElement = document.getElementById('result');
    const colorBox = document.getElementById('colorBox');
    
    resultElement.textContent = colorName;
    colorBox.style.backgroundColor = input;
    
    if (colorName === 'Неизвестный цвет') {
        resultElement.style.color = 'red';
        colorBox.style.backgroundColor = '#fff';
    } else {
        resultElement.style.color = '#333';
    }
});