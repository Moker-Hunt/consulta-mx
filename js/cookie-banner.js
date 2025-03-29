document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, принял ли пользователь cookie
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
        // Если не принял, показываем баннер
        showCookieBanner();
    }
    
    // Функция для показа баннера
    function showCookieBanner() {
        const cookieBannerOverlay = document.getElementById('cookieBannerOverlay');
        if (cookieBannerOverlay) {
            cookieBannerOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
        }
    }
    
    // Обработчик клика по кнопке принятия
    const acceptButton = document.getElementById('cookieAcceptBtn');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Устанавливаем флаг в localStorage
            localStorage.setItem('cookiesAccepted', 'true');
            
            // Скрываем баннер
            const cookieBannerOverlay = document.getElementById('cookieBannerOverlay');
            if (cookieBannerOverlay) {
                cookieBannerOverlay.style.display = 'none';
                document.body.style.overflow = ''; // Восстанавливаем прокрутку
            }
        });
    }
});
