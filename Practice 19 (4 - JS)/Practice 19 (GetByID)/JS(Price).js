// Написать функцию getRedPrice(),
// которая принимает в качестве аргумента
// ценник (который считается со скидкой
// redPrice - красная цена). Найти
// элементы у которых ценник ниже либо
// равны redPrice и вернуть массив этих элементов.

function getRedPrice(redPrice) {
    const items = [
      { id: 1, name: "Leggings", price: 15 },
      { id: 2, name: "Cardigan", price: 49.9 },
      { id: 4, name: "Dressing gown", price: 55 },
      { id: 11, name: "Dress", price: 70.9 },
      { id: 33, name: "Jacket", price: 86.7 },
      { id: 8, name: "Coat", price: 99.9 }
    ];
  
    return items.filter(item => item.price <= redPrice);
  }
  
  // Примеры использования:
  console.log(getRedPrice(50));
  // Вывод: [
  //   { id: 1, name: "Leggings", price: 15 },
  //   { id: 2, name: "Cardigan", price: 49.9 }
  // ]
  
  console.log(getRedPrice(100));
  // Вывод: Все элементы (кроме "Coat" с price: 99.9)