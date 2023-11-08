const navToggle = document.querySelector('.mobile-nav-toggle-btn');
const nav = document.querySelector('.navigation');
const navIcon = document.querySelector('.mobile-nav-toggle-btn-icon');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navIcon.src = '/icons8-x.svg';
    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navIcon.src = '/icons8-hamburger-menu.svg';
    }
});