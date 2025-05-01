books = [
    {
        title: "Война и мир",
        author: "Лев Толстой",
        isRussianAuthor: true,
        isModernLiterature: false,
        genre: 1,
        year: '1863 - 1869',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 4 },
            { userId: 3, rating: 4 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Ночной дозор",
        author: "Сергей Лукьяненко",
        isRussianAuthor: true,
        isModernLiterature: true,
        genre: 3,
        year: '1998',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Гарри Поттер",
        author: "Дж. К. Роулинг",
        isRussianAuthor: false,
        isModernLiterature: true,
        genre: 3,
        year: '1997 - 2007',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 4 },
            { userId: 4, rating: 4 },
            { userId: 5, rating: 5 },
            { userId: 6, rating: 5 },
            { userId: 7, rating: 5 }
        ],
    },
    {
        title: "Шерлок Холмс",
        author: "Артур Конан Дойл",
        isRussianAuthor: false,
        isModernLiterature: false,
        genre: 2,
        year: '1887',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 }
        ],
    },
    {
        title: "Девушка в поезде",
        author: "Пола Хокинс",
        isRussianAuthor: true,
        isModernLiterature: true,
        genre: 2,
        year: '2015',
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 3 },
            { userId: 4, rating: 5 },
            { userId: 5, rating: 2 }
        ],
    },
]

//==================(1)===================
function getBookInfo(book)
{
    return `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year}`;
}
console.log(getBookInfo(books[0])); 
// "Название: Война и мир, Автор: Лев Толстой, Год: 1863 - 1869"

console.log(getBookInfo(books[4])); 
// "Название: Девушка в поезде, Автор: Пола Хокинс, Год: 2015"

console.log(getBookInfo(books[2])); 
// "Название: Гарри Поттер, Автор: Дж. К. Роулинг, Год: 1997 - 2007"

//==================(2)===================
function addRating(book, userId, rating)
{
    if (!book.ratings)
        {
            book.ratings = []; // Если у книги нет ratings, создаем массив
        }
    if (typeof rating !== 'number' || rating < 1 || rating > 5)
        {
            console.error("Рейтинг должен быть числом от 1 до 5");
            return;
        }
    book.ratings.push({ userId, rating });
}
// Первая книга (Война и мир)
console.log("До добавления:", books[0].ratings.length); // 4

// Add - рейтинг
addRating(books[0], 5, 5); // userId=5, rating=5

console.log("После добавления:", books[0].ratings.length); // 5
console.log(books[0].ratings); 
// Последний элемент будет {userId: 5, rating: 5}
//==================(3)===================
function Rating(book)
{
    if (!book.ratings || !book.ratings.length) return 0;
    
    const sum = book.ratings.reduce((acc, {rating}) => acc + rating, 0);
    return Math.round((sum / book.ratings.length) * 10) / 10; // math round - округление
}
console.log(Rating(books[0])); // 4.4
console.log(Rating(books[2])); // 4.6
//==================(4)===================
function recommendBook() {
    // Спрашиваем жанр с проверкой
    let genre;
    while (true) {
      genre = prompt(
        'Какой жанр предпочитаете?\n' +
        '1 - Роман\n' +
        '2 - Детектив\n' +
        '3 - Фентези\n' +
        'Введите число от 1 до 3:'
      );
  
      if (genre === null) {
        alert('Вы отменили выбор');
        return;
      }
  
      genre = parseInt(genre);
      if ([1, 2, 3].includes(genre)) break;
      alert('Некорректный ввод! Попробуйте ещё раз.');
    }
  
    // Доп. вопросы
    const isModern = confirm('Предпочитаете современную литературу?');
    const isRussian = confirm('Хотели бы книгу русского автора?');
  
    // Проверка книг
    const recommendedBook = books.find(book => 
      book.genre === genre &&
      book.isModernLiterature === isModern &&
      book.isRussianAuthor === isRussian
    );
  
    // Готово!
    if (recommendedBook) {
      alert(`Предлагаем вам почитать - "${recommendedBook.title}"`);
    } else {
      alert('К сожалению, не смогли подобрать вам книгу');
    }
}
  
  // Запускаем функцию
  recommendBook();