const hamburgerMenuBtn = document.querySelector('.news__hamburger-button');
const hamburgerIcon = document.querySelector('#news__hamburger-icon');
const navMenu = document.querySelector('.news__nav-menu');

hamburgerMenuBtn.addEventListener('click', () => {
  if (navMenu.style.display === 'none') {
    hamburgerIcon.src = 'assets/images/icon-menu-close.svg';
    navMenu.style.display = 'flex';
    navMenu.style.transform = 'translate(0%)';
  } else {
    hamburgerIcon.src = 'assets/images/icon-menu.svg';
    navMenu.style.display = 'none';
    navMenu.style.transform = 'translate(100%)';
  }
});
