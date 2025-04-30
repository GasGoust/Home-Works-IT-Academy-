//Написать функцию, которая принимает массив
// строк и возвращает новый массив строк,
// которые были только в ВЕРХНЕМ РЕГИСТРЕ

// && str !== '' — исключает пустые строки
function upCaseStrings(array)
{
    return array.filter(string => string === string.toUpperCase() && string !== '');
}
  
  // Пример использования:
  const strings = ["HELLO", "World", "JS", "", "123", "UPPER", "lower"];
  const result = upCaseStrings(strings);
  
  console.log(result); // Вывод: ["HELLO", "JS", "UPPER"]