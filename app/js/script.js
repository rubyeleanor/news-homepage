const openBtn = document.querySelector('#OpenBtn');
const closeBtn = document.querySelector('#CloseBtn');
const media = window.matchMedia('(width < 768px)');
const topNavMenu = document.querySelector('.menu');
const main = document.querySelector('main');


function setupTopNav(e) {
    if (e.matches) {
        // is mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert', ''); //for accessiibility
        topNavMenu.style.transition = 'none';
        //is tablet/desktop
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
    }
}

function openMobileMenu() {
    openBtn.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
}

function closeMobileMenu() {
    openBtn.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
}

setupTopNav(media);

openBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);
})