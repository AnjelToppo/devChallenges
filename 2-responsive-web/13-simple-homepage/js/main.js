let themeIconEl = document.querySelectorAll(".toggle-theme-icon__container");
let themeImgEl = document.querySelectorAll(".toggle-theme__icon");
let heroSectionEl = document.querySelector('.hero-section');
let bodyEl = document.querySelector("body");
let navLinkActiveEl = document.querySelector('.nav__link--active');
let sideBtnEl = document.querySelector('.side-button');
let hamburgerImgEl = document.querySelector('.hamburger-img');


// For mobile navigation
// *************************
let navEl = document.querySelector('.nav');
let toggleEl = document.querySelector('.toggle-theme');
let header = document.querySelector('.header');
let mobileNavEl = document.querySelector('.mobile-nav');
let hamburgerEl = document.querySelector('.hamburger-icon');
let closeNavEl = document.querySelector('.close-navigation');

const mediaQuery = window.matchMedia('(max-width: 944px');

function handleMobileChange(evt) {
    if (evt.matches) {
        navEl.remove();
        toggleEl.remove();
        header.appendChild(hamburgerEl);
        mobileNavEl.remove();
    } else {
        header.classList.remove('nav-open')
        header.appendChild(navEl);
        header.appendChild(toggleEl);
        hamburgerEl.remove();
        mobileNavEl.remove();
        navEl.classList.remove('mbl-nav-list');
        if (bodyEl.classList.contains('dark-theme')) {
            navLinkActiveEl.style.color = '#FFFFFF';
        }
    }
}

mediaQuery.addEventListener('change', handleMobileChange);
handleMobileChange(mediaQuery);

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.remove();
    header.appendChild(mobileNavEl);
    navEl.classList.add('mbl-nav-list');
    mobileNavEl.appendChild(navEl);
    mobileNavEl.appendChild(toggleEl);
    navLinkActiveEl.style.color = '#2A4DD0';
    header.classList.add('nav-open');
})

closeNavEl.addEventListener('click', () => {
    mobileNavEl.remove();
    header.appendChild(hamburgerEl);
    if (bodyEl.classList.contains('light-theme')) {
        navLinkActiveEl.style.color = '#2A4DD0';
    } else if (bodyEl.classList.contains('dark-theme')) {
        navLinkActiveEl.style.color = '#FFFFFF';
    }
})
// *************************

navLinkActiveEl.style.color = '#2A4DD0';

themeIconEl[0].addEventListener("click", () => {
    bodyEl.classList.remove('light-theme');
    bodyEl.classList.add('dark-theme');
    navLinkActiveEl.style.color = '#FFFFFF';
    if (bodyEl.classList.contains('dark-theme')) {
        navLinkActiveEl.style.color = '#FFFFFF';
    }
    if (header.classList.contains('nav-open') && bodyEl.classList.contains('dark-theme')) {
        navLinkActiveEl.style.color = '#2A4DD0';
    }
    heroSectionEl.style.backgroundColor = '#111729';
    bodyEl.style.color = '#FFFFFF';
    sideBtnEl.style.color = '#FFFFFF';
    themeImgEl[1].src = "resources/Sun_fill_light.svg";
    themeImgEl[0].src = "resources/Moon_fill.svg";
    themeIconEl[1].classList.remove('toggle-theme-icon__container--active');
    themeIconEl[0].classList.add('toggle-theme-icon__container--active');
    if (hamburgerImgEl) hamburgerImgEl.src = "resources/hamburger-button_light.svg";
})
themeIconEl[1].addEventListener("click", () => {
    bodyEl.classList.remove('dark-theme');
    bodyEl.classList.add('light-theme');
    navLinkActiveEl.style.color = '#2A4DD0';
    if (bodyEl.classList.contains('light-theme')) {
        navLinkActiveEl.style.color = '#2A4DD0';
    }
    heroSectionEl.style.backgroundColor = '#F2F9FE';
    bodyEl.style.color = '#223344';
    sideBtnEl.style.color = '#2A4DD0';
    themeImgEl[0].src = "resources/Moon_fill_light.svg";
    themeImgEl[1].src = "resources/Sun_fill.svg";
    themeIconEl[0].classList.remove('toggle-theme-icon__container--active');
    themeIconEl[1].classList.add('toggle-theme-icon__container--active');
    if (hamburgerImgEl) hamburgerImgEl.src = "resources/hamburger-button.svg";
})



