// function checkAge(age) {
//       if (age >= 18) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     let age = prompt('Сколько вам лет?', 18);
//     if ( checkAge(age) ) { // В if  будет передан либо true либо false 
//       console.log( 'Доступ получен' );
//     } else {
//       console.log( 'Доступ закрыт' );
//     }
    

function sum(a, b) {
    return a + b;
    }
    let result = sum(1, 2);
    console.log( result ); // 3
    console.log( sum(4, 5 ) ); // 9
//---------или------------

function min(a,b)
{
    if (a < b) return a;
    else if (b < a) return b;
    else if (a == b) return a;
}

//----------или------------

function minTer(a,b)
{
    if (a < b || a == b) return a;
    else if (b < a) return b;
}

//-----------или-------------

function minNum( a , b )
{
    return ( a < b ) ? a : b;
}

//------------вывод---------------
console.log(min(4,5));
console.log(minTer(4,5));
console.log(minNum(4,5));
//--
console.log(min(6,5));
console.log(minTer(6,5));
console.log(minNum(6,5));
//--
console.log(min(9,5));
console.log(minTer(9,5));
console.log(minNum(9,5));