// Navbar start

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav-block')
const navLinksMobile = document.querySelector('.nav-links-mobile');
const navLinkMobile = document.querySelectorAll('.mobile-nav-link')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('active')
    navLinksMobile.classList.toggle('active');
    navLinkMobile.forEach(link => {
        link.classList.toggle('active')
    });
});

// Navbar end