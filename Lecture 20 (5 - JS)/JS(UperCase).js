// Написать функцию, которая принимает
// массив строк и возвращает новый массив строк,
// которые были только в ВЕРХНЕМ РЕГИСТРЕ

function getUppercaseStrings(arr) {
    const result = [];
    
    for (const str of arr) {
      if (str === str.toUpperCase() && str !== '') {
        result.push(str);
      }
    }
    
    return result;
  }
  
  // Пример использования:
  const strings = ['HELLO', 'World', 'JS', '', '123', 'UPPER', 'lower'];
  const uppercaseStrings = getUppercaseStrings(strings);
  
  console.log(uppercaseStrings); // ['HELLO', 'JS', 'UPPER']