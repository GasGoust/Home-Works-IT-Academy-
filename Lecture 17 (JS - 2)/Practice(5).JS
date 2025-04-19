// условие ? выражение если истина : выражение если ложь
// Тернарный оператор

//Admin
let loggedIn = true;
loggedIn ? console.log("Выход") : console.log("Вход");
//-----------------
let isAdmin = true;
let status = isAdmin ? "Администратор" : "Пользователь";
console.log(status); // "Администратор"