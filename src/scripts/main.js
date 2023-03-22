window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__wrapper'),
    overlay = document.querySelector('.overlay');
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        overlay.classList.toggle("overlay_active");
        menu.classList.toggle('navigation__wrapper_active');
    });
});
