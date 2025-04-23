// Breake-----------------

// secretNumber = 0;
//  while(true)
    // {//бесконечный цикл
//         secretNumber - prompt("Введите число от 1 до 20");
//         if (secretNumber> 0 && secretNumber < 20) break; //(*)

//     }
// console.log('secretNumber: ' + secretNumber);

// Breake-----------------

// for (let i = 0; i<0; i++)
//     {
//         //Если true пропустить оставшуюся часть цикла
//         if (i%2==0) continue; //антоним - break
//         console.log(i); //1.2.3.4
//     }

// Breake-----------------
//1
let number = 1;
while (number <= 19) {
    if (number !== 13) { // Выводим только если не 13
        console.log(number);
    }
    number += 2; // Увеличиваем на 2 для нечётных чисел
}
//2
for (let i = 1; i <= 19; i += 2) {
    if (i === 13) continue; // Пропускаем 13
    console.log(i);
}
//3
for(let houseNum = 1; houseNum < 19; houseNum += 2){
    if (houseNum == 13) continue;
    console.log(`дом N` + houseNum);
}