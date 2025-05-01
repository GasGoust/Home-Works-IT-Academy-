// Написать функцию, которая возвращает
// отсортированный массив цен.
// 10 Slide (5 - JS) Lecture
// пример:
// [   {
//         id: 1,
//         name: "Leggings",
//         price: 15
//     },
//     {
//         id: 2,
//         name: "Cardigan",
//         price: 49.9
//     },
//     {
//         id: 4,
//         name: "Dressing gown",
//         price: 55
//     },
//     {
//         id: 11,
//         name: "Dress",
//         price: 70.9
//     },
//     {
//         id: 33,
//         name: "Jacket",
//         price: 86.7
//     },
//     {
//         id: 8,
//         name: "Coat",
//         price: 99.9
//     }
// ]

// (от меньшей к большей)
function sortByPrice(items)
{
    // Создаем копию массива перед сортировкой, чтобы не изменять исходный
    return [...items].sort((a, b) => a.price - b.price);
}

// (По убыванию цены)
function sortByPriceMinus(items)
{
    return [...items].sort((a, b) => b.price - a.price);
}
// (Округляем цены через Math Round)
function sortByRoundedPrice(items) {
    return [...items].sort((a, b) => Math.round(a.price) - Math.round(b.price));
  }

// (Если цены равны)
function sortByPriceThenName(items)
{
    return [...items].sort((a, b) => {
      if (a.price === b.price)
        {
            return a.name.localeCompare(b.name);
        }
      return a.price - b.price;
    });
}
  
// (Товары) Пример использования:
const products =
[
    { id: 1, name: "Leggings", price: 15 },
    { id: 2, name: "Cardigan", price: 49.9 },
    { id: 4, name: "Dressing gown", price: 55 },
    { id: 11, name: "Dress", price: 70.9 },
    { id: 33, name: "Jacket", price: 86.7 },
    { id: 8, name: "Coat", price: 99.9 }
];

// 1    
const Wotch1 = sortByPrice(products);
console.log(Wotch1);

// 2   
const Wotch2 = sortByPriceMinus(products);
console.log(Wotch2);

// 3    
const Wotch3 = sortByRoundedPrice(products);
console.log(Wotch3);

// 4    
const Wotch4 = sortByPriceThenName(products);
console.log(Wotch4);
