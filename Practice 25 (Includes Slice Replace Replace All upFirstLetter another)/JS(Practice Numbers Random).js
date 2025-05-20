const array = [];
for(let i = 0; i<10; i++)
    {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        array.push(randomNumber);
    }
    console.log(array)