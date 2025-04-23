//-пример-

function greet(name, callback) {
    console.log("Привет, " + name);
    сallback();
    }
    
    // при вызове используется стрелочная функция
    greet("Анна", () => console.log("Колбэк вызван."));
    
    // при вызове используется анонимная Function Expression
    greet("Анна", function() { console.log("Колбэк вызван.") });
//-----------------------------    

const min = function (a,b)
{
    if ( a <= b ) return a;
    else if (b < a) return b;
}
function min(a,b)
{
    if (a < b) return a;
    else if (b < a) return b;
    else if (a == b) return a;
}

function num(minCallback)//Random name
{
    console.log(minCallback)
}

num (min(2,2));