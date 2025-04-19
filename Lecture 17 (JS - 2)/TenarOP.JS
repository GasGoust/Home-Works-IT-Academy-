//-----------(1)----------------------
// let num = prompt("Ваша сумма?")

// if(num<0||num>0){}
// else if(num<0||num>0)

// switch(+num)
// {
//     case 1:
//     case 2:
//     case "Done!":
//     case "Error!":
//     console.log("Оплата");
//     brake;
// }

// if(num<0||num>0) console.log("Недостаточно средств")
// else console.log("Оплачено!")

// (num<0||num>0) ? console.log("Недостаточно средств") : console.log("Оплачено")

//-----------(2)----------------------
// const balance = 1500;    // Остаток на карте
// const payment = 900;     // Сумма покупки

// const result = balance >= payment 
//     ? "Покупка одобрена (V)" 
//     : "Недостаточно средств (X)";

// console.log(result);
//------------(3 Visa Card)------------
const balance = Number(prompt("Ваш баланс:"));
const payment = Number(prompt("Сумма покупки:"));

console.log(
    !isNaN(balance) && !isNaN(payment)
        ? balance >= payment
            ? "Покупка одобрена (V)"
            : "Недостаточно средств (X)"
        : "Ошибка ввода данных (!)"
);