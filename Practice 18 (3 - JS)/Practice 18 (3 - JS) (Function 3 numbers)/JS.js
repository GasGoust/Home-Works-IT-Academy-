function logNumbers (N)
{
    // let N =+prompt ("Введите число");
    let i = 3
    while (i<=N)
    {
        console.log(i);
        i++;
    }    
}
logNumbers (3);
logNumbers (6);
logNumbers (12);
// или
logNumbers (+prompt("Введите данные"));