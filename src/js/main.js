const burgerBtn = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileLinks = document.querySelectorAll('.mobile-link')
const body = document.querySelector('body')

mobileLinks.forEach(function(item) {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu--active')
        body.style.overflow = 'auto'
    })
})

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--active')

    if (mobileMenu.classList.contains('mobile-menu--active')) {
        body.style.overflow = 'hidden'
        mobileMenu.style.overflow = 'auto'
    } else {
        body.style.overflow = 'auto'
    }
})