// однаковые функции
// function и => - Одинаково
//1
const sum = function (a,b)
{
    return a+b;
};
//2
const sum1 = (a,b)  => // без слово функция
{
    return a+b
};
//3
const sum2 = (a,b)  => // без ретурн, если пргоисходит только одно действие
{};
//---------------

// функция CALLBACK
const sum3 = (a,b)  => // решли что станет с b и вывели ее на результат
{
    const result = b();
    return result 
};