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
const num = 6;
for(let i=1; i<9;i++)
    {
        if (i==5) break;//антоним - continue
        console.log(`6 * ${i} = ${num * i}`)
    } // Вычисление остановилось до 5-ого подсчета
    console.log("END")