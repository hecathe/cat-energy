var toggle = document.querySelector('.header__toggle');
var headerNav = document.querySelector('.header__nav');

toggle.addEventListener('click', function (event) {
    toggle.classList.toggle('active');
    headerNav.classList.toggle('open');
});

let title = document.title;
let footerContacts = document.querySelector('.footer__contacts');

if (title == 'Главная') {
  footerContacts.classList.add('footer__contacts--grey');
}