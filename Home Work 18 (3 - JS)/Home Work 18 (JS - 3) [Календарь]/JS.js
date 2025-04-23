function convertNumber(sec, unit) {
    const units = {
        min: 60,
        hour: 60 * 60,
        day: 60 * 60 * 24,
        year: 60 * 60 * 24 * 365
    };

    // Проверка корректности единицы измерения
    if (!units[unit]) {
        throw new Error("Недопустимая единица. Используйте: 'min', 'hour', 'day', 'year'.");
    }

    // Вычисление и округление до 2 знаков
    const result = sec / units[unit];
    return Math.round(result * 100) / 100;
}

console.log(convertNumber(120, 'min'));   // 2 минуты
console.log(convertNumber(7200, 'hour')); // 2 часа
console.log(convertNumber(172800, 'day')); // 2 дня
console.log(convertNumber(63072000, 'year')); // 2 года

function convertNumberInteractive(sec) {
    const unit = prompt("Введите единицу (min/hour/day/year):").toLowerCase();
    const units = {
        min: 60,
        hour: 3600,
        day: 86400,
        year: 31536000
    };

    if (!units[unit]) {
        alert("Ошибка: неверная единица!");
        return null;
    }

    const result = sec / units[unit];
    return Math.round(result * 100) / 100;
}

// Пример вызова:
const seconds = parseInt(prompt("Введите секунды:"));
const converted = convertNumberInteractive(seconds);
alert(`Результат: ${converted}`);