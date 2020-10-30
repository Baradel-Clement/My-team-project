// Navbar start //

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

// Navbar end //

// Directors cards //

const directorsBtn = document.querySelectorAll('.directors-card-button');

directorsBtn.forEach(directorBtn => {
    directorBtn.addEventListener('click', () => {
        directorBtn.previousElementSibling.classList.toggle('active');
        directorBtn.classList.toggle('active')
    })
})

// Direcotrs cards end //
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#contact-form');
const textareas = document.querySelectorAll('textarea');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputs.forEach(input => {
            if (input.value == '' || input.value == null) {
                input.nextElementSibling.classList.add('active');
                input.parentElement.classList.remove('valid')
                input.parentElement.classList.add('nonvalid')
            } else {
                input.nextElementSibling.classList.remove('active');
                input.parentElement.classList.remove('nonvalid')
                input.parentElement.classList.add('valid')
            }
        })
        textareas.forEach(textarea => {
            if (textarea.value == '' || textarea.value == null) {
                textarea.nextElementSibling.classList.add('active');
                textarea.parentElement.classList.remove('valid')
                textarea.parentElement.classList.add('nonvalid')
            } else {
                textarea.nextElementSibling.classList.remove('active');
                textarea.parentElement.classList.remove('nonvalid')
                textarea.parentElement.classList.add('valid')
            }
        })
    })
}

// Form contact start //

