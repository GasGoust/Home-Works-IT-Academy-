document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Закрываем мобильное меню если открыто
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                }
                
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Фиксация хедера при скролле
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Модальное окно для номеров
    const roomModal = document.getElementById('room-modal');
    const roomDetailsBtns = document.querySelectorAll('.room-details-btn');
    const closeModal = document.querySelector('.close-modal');

    // Данные для номеров (в реальном проекте будут приходить с сервера)
    const roomsData = {
        1: {
            title: 'Эконом',
            price: 'от 1 500 руб./ночь',
            description: 'Уютный деревянный домик площадью 15 м² для 2-х человек. Идеально подходит для романтического отдыха или уединения с природой.',
            amenities: ['Двуспальная кровать', 'Компактная кухня с плитой', 'Санузел с душем', 'Терраса с видом на лес', 'Отопление'],
            images: [
                'image/Green_House.png',
                'image/Sleep_Room.png',
                'image/Kichen_in_House.jpg',
            ]
        },
        2: {
            title: 'Стандарт',
            price: 'от 2 500 руб./ночь',
            description: 'Просторный домик площадью 25 м² для семьи из 3-4 человек. Вместительный и комфортабельный вариант с отдельной спальней и гостиной.',
            amenities: ['Двуспальная кровать + диван-кровать', 'Полноценная кухня с холодильником', 'Санузел с душем', 'Просторная терраса', 'Отопление', 'Телевизор'],
            images: [
                'image/Standart_House.png',
                'image/Kichen_House_in_Wood.jpg',
                'image/WC_House.jpg',
            ]
        },
        3: {
            title: 'Люкс',
            price: 'от 4 000 руб./ночь',
            description: 'Просторный двухкомнатный домик площадью 40 м² с камином и панорамными окнами. Роскошный вариант для особых случаев и максимально комфортного отдыха.',
            amenities: ['Большая двуспальная кровать', 'Гостиная с диваном и камином', 'Полноценная кухня с техникой', 'Санузел с душем и гидромассажем', 'Просторная терраса с мебелью', 'Кондиционер', 'Телевизор с Smart TV', 'Чайная станция'],
            images: [
                'image/Wood_House.png',
                'image/Red_House.png',
                'image/Kichen_in_a_red_House.jpg',
            ]
        }
    };

    roomDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const roomCard = this.closest('.room-card');
            const roomId = roomCard.dataset.room;
            const roomData = roomsData[roomId];
            
            if (roomData) {
                const modalBody = document.querySelector('.modal-body');
                
                // Формируем HTML для модального окна
                modalBody.innerHTML = `
                    <h2>${roomData.title}</h2>
                    <p class="room-price">${roomData.price}</p>
                    <p>${roomData.description}</p>
                    
                    <h3>Удобства</h3>
                    <ul>
                        ${roomData.amenities.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    
                    <h3>Фотографии</h3>
                    <div class="modal-gallery">
                        ${roomData.images.map((img, index) => 
                            `<img src="${img}" alt="${roomData.title} фото ${index + 1}" class="modal-gallery-img" data-index="${index}">`
                        ).join('')}
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <a href="#booking" class="btn">Забронировать этот домик</a>
                    </div>
                `;
                
                // Добавляем обработчики для изображений в модальном окне комнаты
                const modalGalleryImgs = modalBody.querySelectorAll('.modal-gallery-img');
                modalGalleryImgs.forEach((img, index) => {
                    img.addEventListener('click', function() {
                        const roomImagesData = roomData.images.map((src, i) => ({
                            src: src,
                            alt: `${roomData.title} фото ${i + 1}`
                        }));
                        openGalleryModal(roomImagesData, index);
                    });
                });
                
                roomModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeModal.addEventListener('click', function() {
        roomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(e) {
        if (e.target === roomModal) {
            roomModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Слайдер отзывов
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonials = document.querySelectorAll('.testimonial');

    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = this.dataset.slide;
            
            // Убираем активный класс у всех точек и отзывов
            testimonialDots.forEach(d => d.classList.remove('active'));
            testimonials.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс текущей точке и отзыву
            this.classList.add('active');
            testimonials[slideIndex].classList.add('active');
        });
    });

    // Автопереключение слайдера
    let currentSlide = 0;
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        
        testimonialDots.forEach(d => d.classList.remove('active'));
        testimonials.forEach(t => t.classList.remove('active'));
        
        testimonialDots[currentSlide].classList.add('active');
        testimonials[currentSlide].classList.add('active');
    }, 5000);

    // Аккордеон FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Закрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('open');
            });
            
            document.querySelectorAll('.faq-question span').forEach(item => {
                item.textContent = '+';
            });
            
            // Открываем текущий ответ если был закрыт
            if (!isOpen) {
                answer.classList.add('open');
                this.querySelector('span').textContent = '−';
            }
        });
    });

    // Имитация проверки доступности
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Проверяем доступность... В реальной версии здесь будет подключение к системе бронирования.');
        });
    }

    // Модальное окно для просмотра фотографий
    const galleryModal = document.getElementById('gallery-modal');
    const galleryModalImg = document.querySelector('.gallery-modal-img');
    const galleryModalCaption = document.querySelector('.gallery-modal-caption');
    const closeGalleryModal = document.querySelector('.close-gallery-modal');
    const galleryPrevBtn = document.querySelector('.gallery-modal-prev');
    const galleryNextBtn = document.querySelector('.gallery-modal-next');

    let currentGalleryIndex = 0;
    let galleryImages = [];

    // Функция для открытия модального окна галереи
    function openGalleryModal(images, startIndex = 0) {
        galleryImages = images;
        currentGalleryIndex = startIndex;
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateGalleryModal();
    }

    function updateGalleryModal() {
        if (galleryImages.length > 0) {
            galleryModalImg.src = galleryImages[currentGalleryIndex].src;
            galleryModalCaption.textContent = galleryImages[currentGalleryIndex].alt;
        }
    }

    // Закрытие модального окна галереи
    function closeGalleryModalFunc() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeGalleryModal.addEventListener('click', closeGalleryModalFunc);

    // Навигация по галерее
    galleryPrevBtn.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryModal();
    });

    galleryNextBtn.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        updateGalleryModal();
    });

    // Закрытие по клику вне изображения
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModalFunc();
        }
    });

    // Навигация с помощью клавиатуры
    document.addEventListener('keydown', function(e) {
        if (galleryModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeGalleryModalFunc();
            } else if (e.key === 'ArrowLeft') {
                currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
                updateGalleryModal();
            } else if (e.key === 'ArrowRight') {
                currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
                updateGalleryModal();
            }
        }
    });

    // Обработка кликов на изображения в галерее главной страницы
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const galleryImagesData = Array.from(document.querySelectorAll('.gallery-item img')).map(img => ({
                src: img.src,
                alt: img.alt
            }));
            openGalleryModal(galleryImagesData, index);
        });
    });

    // Обработка кликов на изображения в секции "О нашей базе отдыха"
    const aboutImages = document.querySelectorAll('#about .about-image img');
    aboutImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const aboutImagesData = Array.from(document.querySelectorAll('#about .about-image img')).map(img => ({
                src: img.src,
                alt: img.alt
            }));
            openGalleryModal(aboutImagesData, index);
        });
    });

    // Обработка кликов на изображения в секции "Рыбалка"
    const fishingImages = document.querySelectorAll('#fishing .about-image img');
    fishingImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const fishingImagesData = Array.from(document.querySelectorAll('#fishing .about-image img')).map(img => ({
                src: img.src,
                alt: img.alt
            }));
            openGalleryModal(fishingImagesData, index);
        });
    });

    // Добавляем курсор-указатель для всех кликабельных изображений
    document.querySelectorAll('.about-image img, .gallery-item img, .modal-gallery-img').forEach(img => {
        img.style.cursor = 'pointer';
    });
});