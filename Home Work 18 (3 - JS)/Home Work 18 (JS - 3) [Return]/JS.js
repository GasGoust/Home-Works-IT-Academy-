function convertNumber(sec) {
    // Запрашиваем у пользователя выбор единицы измерения
    const unit = prompt("Введите единицу (min/hours/days/years):").toLowerCase().trim();
    
    // Константы для расчета
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const YEAR = 365 * DAY;

    // Проверяем выбор и возвращаем результат
    switch (unit) {
        case "min":
            return +(sec / MINUTE).toFixed(2);
        case "hours":
            return +(sec / HOUR).toFixed(2);
        case "days":
            return +(sec / DAY).toFixed(2);
        case "years":
            return +(sec / YEAR).toFixed(2);
        default:
            throw new Error("Некорректная единица измерения. Допустимые значения: min, hours, days, years.");
    }
}

// Пример использования
const seconds = 86400; // 1 день
const result = convertNumber(seconds);
console.log(result); // Результат зависит от выбора пользователя