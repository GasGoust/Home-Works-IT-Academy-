// Написать функцию getByName(), которая
// принимает в качестве аргумента name и
// находит элемент по этому name, и возвращает
// его, либо сообщение, что такого элемента нет
// в списке


function getByName(name) {
    const items = [
      { id: 1, name: "Leggings", price: 15 },
      { id: 2, name: "Cardigan", price: 49.9 },
      { id: 4, name: "Dressing gown", price: 55 },
      { id: 11, name: "Dress", price: 70.9 },
      { id: 33, name: "Jacket", price: 86.7 },
      { id: 8, name: "Coat", price: 99.9 }
    ];
  
    const foundItem = items.find(item => item.name === name);
    return foundItem ? foundItem : `Элемент с названием "${name}" не найден.`;
  }
  
  // Примеры использования:
  console.log(getByName("Jacket")); 
  // { id: 33, name: "Jacket", price: 86.7 }
  
  console.log(getByName("T-shirt")); 
  // "Элемент с названием "T-shirt" не найден."