function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menu.classList.contains('open')) {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
    }
}