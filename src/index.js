import './scss/styles.scss';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const dogIcon = document.querySelector('.refresh');
const uslugi = document.querySelector('.nav-uslugi');
const cennik = document.querySelector('.nav-cennik');
const oMnie = document.querySelector('.nav-o-mnie');
const kontakt = document.querySelector('.nav-kontakt');
const regulamin = document.querySelector('.nav-regulamin');
const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

// dogIcon.addEventListener('click', () => location.reload());
// uslugi.addEventListener('click', generateUslugi);

burger.addEventListener('click', () => {
  modal.classList.remove('is-hidden');
  modal.style.transform = 'translate(0, 0)';
});

close.addEventListener('click', () => {
  modal.style.transform = 'translate(100%, 0)';
  modal.classList.add('is-hidden');
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const navItems = document.querySelectorAll('.nav__item');

// // hide all ::before pseudoelements
// navItems.forEach(item => {
//   item.classList.remove('active');
// });

// // show ::before pseudoelement of clicked element
// navItems[].classList.add('active');
