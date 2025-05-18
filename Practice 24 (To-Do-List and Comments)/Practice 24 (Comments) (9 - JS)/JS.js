// Пример данных комментариев
const comments = [
  {
    id: 1,
    name: "Иван Иванов",
    email: "ivan@example.com",
    body: "Это отличный пост, спасибо автору! Очень полезная информация, которая мне помогла в работе."
  },
  {
    id: 2,
    name: "Петр Петров",
    email: "petr@example.com",
    body: "Интересная точка зрения, но я не совсем согласен. Хотелось бы увидеть больше примеров."
  },
  {
    id: 3,
    name: "Мария Сидорова",
    email: "maria@example.com",
    body: "Спасибо за статью! Все очень понятно объяснено, особенно для новичков."
  },
  {
    id: 4,
    name: "Алексей Алексеев",
    email: "alex@example.com",
    body: "Есть несколько неточностей в описании, но в целом материал хороший."
  },
  {
    id: 5,
    name: "Елена Еленова",
    email: "elena@example.com",
    body: "Прочитала с удовольствием! Жду продолжения этой темы."
  }
];

// DOM элементы
const commentsContainer = document.getElementById('comments-container');
const searchInput = document.getElementById('search-input');

// Функция для создания карточки комментария
function createCommentCard(comment) {
  const card = document.createElement('div');
  card.className = 'comment-card';
  card.dataset.id = comment.id;
  
  card.innerHTML = `
    <h3 class="comment-author">${comment.name}</h3>
    <a href="mailto:${comment.email}" class="comment-email">${comment.email}</a>
    <p class="comment-text">${comment.body}</p>
    <button class="delete-btn">Удалить</button>
  `;
  
  // Добавляем обработчик удаления
  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteComment(comment.id);
  });
  
  return card;
}

// Функция для удаления комментария
function deleteComment(commentId) {
  const index = comments.findIndex(comment => comment.id === commentId);
  if (index !== -1) {
    comments.splice(index, 1);
    renderComments(comments, 'comments-container');
  }
}

// Функция для отрисовки комментариев
function renderComments(commentsArray, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  commentsArray.forEach(comment => {
    const card = createCommentCard(comment);
    container.appendChild(card);
  });
}

// Функция фильтрации комментариев
function filterComments() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredComments = comments.filter(comment => 
    comment.name.toLowerCase().includes(searchTerm)
  );
  renderComments(filteredComments, 'comments-container');
}

// Обработчик события для поиска
searchInput.addEventListener('input', filterComments);

// Первоначальная отрисовка
renderComments(comments, 'comments-container');

