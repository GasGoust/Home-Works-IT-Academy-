// Написать функцию, которая принимает
// массив строк. Все строки, которые
// начинаются на букву ‘a’ заменить строкой ‘array’

function stringWordsA(arr) {
    return arr.map(str => 
      str.toLowerCase().startsWith('a') ? 'array' : str
    );
  }
  
  // Пример использования:
  const words = ['apple', 'Banana', 'orange', 'avocado', 'grape'];
  const result = stringWordsA(words);
  
  console.log(result); 
  // Вывод: ['array', 'Banana', 'orange', 'array', 'grape']