        // Загадываем случайное число
        // random!!!
        const secretNumber = Math.ceil(Math.random() * 20);
        let userGuess;

        // Бесконечный цикл для запроса чисел
        while (true) {
            // Получаем ввод пользователя
            userGuess = parseInt(prompt("Угадайте число от 1 до 20:"));

            // Проверка на отмену ввода или нечисловое значение
            if (isNaN(userGuess)) {
                alert("(X) Это должно быть число!");
                continue;
            }

            // Проверка диапазона
            if (userGuess < 1 || userGuess > 20) {
                alert("(\) Число должно быть между 1 и 20!");
                continue;
            }

            // Проверка угадывания
            if (userGuess === secretNumber) {
                alert(`(V) Поздравляем! Вы угадали число ${secretNumber}!`);
                break;
            } else {
                alert("(^.^) Неверно! Попробуйте еще раз.");
            }
        }