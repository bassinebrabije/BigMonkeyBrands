document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        splash.style.display = 'none'; // Hide the splash screen
        mainContent.classList.remove('hidden'); // Show main content
    }, 2000); // 3 seconds delay
});