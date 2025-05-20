// Первый метод
function upFirstLetter(str) {
  if (!str) return str; // если строка пустая, возвращаем её
  return str[0].toUpperCase() + str.slice(1);
}

// Примеры использования:
console.log(upFirstLetter("вася"));               // "Вася"
console.log(upFirstLetter("добро пожаловать"));   // "Добро пожаловать"
console.log(upFirstLetter("hello world"));        // "Hello world"
console.log(upFirstLetter(""));                   // "" (пустая строка)

// charAt
function upFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//  null/undefined:
function upFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
// Для каждого слова в строке (если нужно сделать заглавными первые буквы всех слов):
function upFirstLetterAllWords(str) {
  return str.split(' ').map(word => upFirstLetter(word)).join(' ');
}

console.log(upFirstLetterAllWords("добро пожаловать в мир js")); 
// "Добро Пожаловать В Мир Js"


// =====================
// function upFirstLetter(str)
// {
//     if(str) return (str);
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(upFirstLetter("hello world!"));