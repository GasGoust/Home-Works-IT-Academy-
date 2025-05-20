//  С помощью slice()
function extractValue(str) {
  return Number(str.slice(1));
}

console.log(extractValue("$120"));   // 120
console.log(extractValue("€2500"));  // 2500

//  С помощью substring()
function extractValue(str) {
  return Number(str.substring(1));
}

console.log(extractValue("$120"));   // 120
console.log(extractValue("€2500"));  // 2500

// replace
function extractValue(str) {
  return Number(str.replace(/[^0-9.-]/g, '')); // Удаляет всё, кроме цифр, точки и минуса
}

console.log(extractValue("$120"));     // 120
console.log(extractValue("€2500"));    // 2500
console.log(extractValue("£12.99"));   // 12.99
console.log(extractValue("-¥500"));    // 500 (если нужно учитывать минус, см. улучшенный вариант)

// Улучшенный вариант (поддерживает отрицательные числа и числа с плавающей точкой)
function extractValue(str) {
  return parseFloat(str.replace(/[^0-9.-]/g, ''));
}

console.log(extractValue("$120"));     // 120
console.log(extractValue("€2500"));    // 2500
console.log(extractValue("£12.99"));   // 12.99
console.log(extractValue("-¥500"));    // -500
console.log(extractValue("₽1,000.50")); // 1000.5 (если запятая — разделитель тысяч, нужно дополнительно обрабатывать)

// Пример с parseInt (если нужно целое число)
function extractValue(str) {
  return parseInt(str.replace(/[^0-9-]/g, ''), 10);
}

console.log(extractValue("€1200"));    // 1200
console.log(extractValue("-£500"));    // -500
console.log(extractValue("$12.99"));   // 12 (дробная часть отбрасывается)