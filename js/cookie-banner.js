document.addEventListener('DOMContentLoaded', function() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
        showCookieBanner();
    }
    
    function showCookieBanner() {
        const cookieBannerOverlay = document.getElementById('cookieBannerOverlay');
        if (cookieBannerOverlay) {
            cookieBannerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    const acceptButton = document.getElementById('cookieAcceptBtn');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            
            const cookieBannerOverlay = document.getElementById('cookieBannerOverlay');
            if (cookieBannerOverlay) {
                cookieBannerOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
