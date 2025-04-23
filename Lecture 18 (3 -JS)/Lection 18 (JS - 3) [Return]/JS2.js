// function pow (a,b)
// {
//     return a**b
// }
// let result = pow (2,2)
// console.log(result); // 4
// console.log(pow(4,4)); // 256

//------------------------------

function pow(a, b) {
    if (b === 0) return 1; // Любое число в степени 0 равно 1
    if (b < 0) return 1 / pow(a, -b); // отрицательная степень
    
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a; // Умножаем 'a' на себя 'b' раз
    }
    return result;
}
console.log(pow(2, 3));   // 8
console.log(pow(5, 0));   // 1
console.log(pow(3, -2));  // 0.111...

// а так-же смотреть 24 слайд лекции 18