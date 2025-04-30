// Написать функцию getById(), которая принимает
// в качестве аргумента id и находит элемент по
// этому id, и возвращает либо его, либо сообщение,
// что такого элемента нет в списке

function getById(id)
{
    const items = [
      { id: 1, name: "Leggings", price: 15 },
      { id: 2, name: "Cardigan", price: 49.9 },
      { id: 4, name: "Dressing gown", price: 55 },
      { id: 11, name: "Dress", price: 70.9 },
      { id: 33, name: "Jacket", price: 86.7 },
      { id: 8, name: "Coat", price: 99.9 }
    ];
  
    const foundItem = items.find(item => item.id === id);
    return foundItem ? foundItem : `Элемент с id ${id} не найден.`;
}
  
  // Примеры использования:
  console.log(getById(4));    // { id: 4, name: "Dressing gown", price: 55 }
  console.log(getById(33));   // { id: 33, name: "Jacket", price: 86.7 }
  console.log(getById(999));  // "Элемент с id 999 не найден."