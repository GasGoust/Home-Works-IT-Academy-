 document.addEventListener('DOMContentLoaded', function() {
const setupDiv = document.getElementById('setup');
const gameDiv = document.getElementById('game');
const playersDiv = document.getElementById('players');
const currentPlayerSpan = document.getElementById('current-player');
const currentLetterSpan = document.getElementById('current-letter');
const field = document.getElementById('field');
const messageDiv = document.getElementById('message');
const wordList = document.getElementById('word-list');
const restartBtn = document.getElementById('restart');
            
let players = [];
let currentPlayerIndex = 0;
let usedWords = new Set();
let currentLetter = '';
            
// Инициализация игры
function initGame(numPlayers)
{
    players = [];
    for (let i = 1; i <= numPlayers; i++) {
        players.push({
            name: `Игрок ${i}`,
            score: 0
        });
    }
                
usedWords.clear();
currentPlayerIndex = 0;
currentLetter = '';
wordList.innerHTML = '';
messageDiv.textContent = '';
field.value = '';

// Отображаем игроков
renderPlayers();

// Начинаем игру
setupDiv.style.display = 'none';
gameDiv.style.display = 'block';
field.focus();

// Первый ход - любая буква
currentLetterSpan.textContent = 'любую';
currentPlayerSpan.textContent = players[currentPlayerIndex].name;}
            
// Отрисовка игроков
function renderPlayers() {
    playersDiv.innerHTML = '';
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = `player ${index === currentPlayerIndex ? 'active' : ''}`;
        playerDiv.textContent = `${player.name}: ${player.score}`;
        playersDiv.appendChild(playerDiv);
    });}
            
// Проверка слова
function checkWord(word) {
    // Приводим к нижнему регистру
    word = word.toLowerCase();
    
    // Проверяем, что слово не использовалось
    if (usedWords.has(word)) {
        return { valid: false, message: `Слово "${word}" уже использовалось!` };
    }
    
    // Проверяем, что слово начинается на нужную букву (если не первый ход)
    if (currentLetter && word[0] !== currentLetter) {
        return { valid: false, message: `Слово должно начинаться на букву "${currentLetter}"!` };
    }
    
    // Проверяем, что слово не пустое
    if (!word.trim()) {
        return { valid: false, message: 'Введите слово!' };
    }
    
    // Проверяем, что слово содержит только буквы
    if (!/^[а-яё]+$/i.test(word)) {
        return { valid: false, message: 'Слово должно содержать только русские буквы!' };
    }
    
    return { valid: true };
}
            
// Обработка ввода слова
function processWord(word) {
    const check = checkWord(word);
    if (!check.valid) {
        messageDiv.textContent = check.message;
        messageDiv.style.color = 'red';
        return false;
    }
    
    // Добавляем слово в использованные
    usedWords.add(word.toLowerCase());
    
    // Добавляем слово в список
    const li = document.createElement('li');
    li.textContent = `${players[currentPlayerIndex].name}: ${word}`;
    wordList.appendChild(li);
    
    // Обновляем текущую букву
    currentLetter = getLastLetter(word);
    currentLetterSpan.textContent = currentLetter;
    
    // Передаем ход следующему игроку
    players[currentPlayerIndex].score++;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentPlayerSpan.textContent = players[currentPlayerIndex].name;
    
    // Очищаем поле ввода
    field.value = '';
    messageDiv.textContent = '';
    
    return true;
}
            
            // Получаем последнюю букву слова
function getLastLetter(word) {
    if (!word || word.length === 0) return ''; // защита от пустой строки
    
    const lastChar = word[word.length - 1].toLowerCase();
    // Обработка букв "ь", "ъ", "ы"
    if (['ь', 'ъ', 'ы'].includes(lastChar) && word.length > 1) {
        return word[word.length - 2].toLowerCase();
    }
    return lastChar;
}
            
            // Обработчики событий
document.getElementById('2players').addEventListener('click', () => initGame(2));
document.getElementById('3players').addEventListener('click', () => initGame(3));
document.getElementById('4players').addEventListener('click', () => initGame(4));

field.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        processWord(this.value);
    }
});

restartBtn.addEventListener('click', function() {
    gameDiv.style.display = 'none';
    setupDiv.style.display = 'block';
});
        });