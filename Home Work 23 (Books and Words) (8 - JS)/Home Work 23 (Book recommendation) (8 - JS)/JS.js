document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const resultDiv = document.getElementById('result');
    const recommendationPara = document.getElementById('recommendation');
    
    // База данных книг
    const books = {
        "роман": {
            modern: {
                russian: "«Авиатор» Евгений Водолазкин",
                foreign: "«Щегол» Донна Тартт"
            },
            classic: {
                russian: "«Война и мир» Лев Толстой",
                foreign: "«Гордость и предубеждение» Джейн Остин"
            }
        },
        "комедия": {
            modern: {
                russian: "«Понедельник начинается в субботу» Братья Стругацкие",
                foreign: "«Дневник Бриджит Джонс» Хелен Филдинг"
            },
            classic: {
                russian: "«12 стульев» Ильф и Петров",
                foreign: "«Трое в лодке, не считая собаки» Джером К. Джером"
            }
        },
        // Добавьте другие жанры по аналогии
    };
    
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные из формы
        const genre = document.getElementById('genre').value;
        const isModern = document.getElementById('modern').checked;
        const isRussian = document.getElementById('russian').checked;
        
        // Проверяем, выбран ли жанр
        if (!genre) {
            alert("Пожалуйста, выберите жанр");
            return;
        }
        
        // Получаем рекомендацию
        const era = isModern ? 'modern' : 'classic';
        const origin = isRussian ? 'russian' : 'foreign';
        
        let recommendation;
        try {
            recommendation = books[genre][era][origin];
        } catch {
            recommendation = "К сожалению, нет рекомендации по вашим критериям";
        }
        
        // Показываем результат
        recommendationPara.textContent = recommendation;
        resultDiv.classList.remove('hidden');
    });
});