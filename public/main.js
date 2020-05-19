const navItems = document.querySelectorAll('.nav__link')
const navMobile = document.querySelector('.nav-mobile')

window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {

}

const toggleNavMenu = () => {
    if (navMobile.classList.contains('show')) {
        navMobile.classList.remove('show')
    }
    else {
        navMobile.classList.add('show')
    }
}
const closeNavMobile = () => {
    navMobile.classList.remove('show')
}

const setActive = item => {
    closeNavMobile();
    [].forEach.call(navItems, (el) => {
        el.classList.remove('active')
    });
    item.classList.add('active')
}
