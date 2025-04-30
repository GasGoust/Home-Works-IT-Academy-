// Написать функцию, которая принимает строку, проверяет на наличие пробелов и возвращает новую строку без пробелов.
// Пример:
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"

function removeSpaces(string)
{
    let result = '';
    for (let start of string)
        {
            if (start !== ' ')
                {
                    result += start;
                }
        }
    return result;
}
console.log(removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"))
console.log(removeSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"))