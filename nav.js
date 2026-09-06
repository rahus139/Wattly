const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-nav');
const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

if (menuToggle && siteNav && sidebarBackdrop) {
    const closeMenu = () => {
        siteNav.classList.remove('is-open');
        sidebarBackdrop.classList.remove('is-visible');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka menu');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        sidebarBackdrop.classList.toggle('is-visible', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    sidebarBackdrop.addEventListener('click', closeMenu);
    siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}
