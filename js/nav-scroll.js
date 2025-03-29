document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    let lastScrollPosition = 0;
    
    // Функция для обработки прокрутки
    function handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        
        // Проверяем направление прокрутки
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
            // Прокрутка вниз - скрываем меню
            nav.style.transform = 'translateY(-100%)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        } else {
            // Прокрутка вверх - показываем меню
            nav.style.transform = 'translateY(0)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        }
        
        lastScrollPosition = currentScrollPosition;
    }
    
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
});
