let user = 
{
    name: "Rustem",
    age: 30,
    isAdmin: true
};

for(let key in user)
    {
        alert (key); // Все ключи(key) внутри Obj
        alert (user[key]); // Все ключи(key) внутри индивидуального Obj
    }

// Теперь консоль будет полностью отображать всю информацию