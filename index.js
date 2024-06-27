document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
