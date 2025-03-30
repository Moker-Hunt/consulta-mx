document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    let lastScrollPosition = 0;
    
    function handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
            nav.style.transform = 'translateY(-100%)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        } else {
            nav.style.transform = 'translateY(0)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        }
        
        lastScrollPosition = currentScrollPosition;
    }
    window.addEventListener('scroll', handleScroll);
});
