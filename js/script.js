
    const navButton = document.getElementById('navButton');
    const navList = document.getElementById('navList');

    navButton.addEventListener('click', () => {
        navList.classList.toggle('active');
        navButton.querySelectorAll('.nav-button-item').forEach(item => item.classList.toggle('active'));
    });

    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navButton.querySelectorAll('.nav-button-item').forEach(item => item.classList.remove('active'));
        });
    });