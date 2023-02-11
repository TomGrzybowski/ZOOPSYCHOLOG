import { generateUslugi } from './JavaScript/uslugi';
import './scss/styles.scss';

const dogIcon = document.querySelector('.refresh');
const uslugi = document.querySelector('.nav-uslugi');
const cennik = document.querySelector('.nav-cennik');
const oMnie = document.querySelector('.nav-o-mnie');
const kontakt = document.querySelector('.nav-kontakt');
const regulamin = document.querySelector('.nav-regulamin');

dogIcon.addEventListener('click', () => location.reload());
uslugi.addEventListener('click', generateUslugi);
