// Object.entries(obj) – возвращает массив пар [ключ, значение].

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
//(Получаем массив пар [ключ, значение])
const entries = Object.entries(user);
console.log(entries);

//(Перебор результата через forEach:)
Object.entries(user).forEach(([key, value]) => {
console.log(`ключ: ${key}, значение: ${value}`);
});
// Выведет:
// Ключ: name, Значение: John
// Ключ: age, Значение: 30
// Ключ: isAdmin, Значение: true

//(Преобразует в МАР)
const userMap = new Map(Object.entries(user));
console.log(userMap.get('name')); // "John"

//(Фильтрация)
const filteredEntries = Object.entries(user).filter(([key, value]) => {
return typeof value === 'string'; // оставляем только строковые значения
});
console.log(filteredEntries); // [ ["name", "John"] ]

//(Переносим в объект)
const newUser = Object.fromEntries(entries);
console.log(newUser); // {name: "John", age: 30, isAdmin: true}