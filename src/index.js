import './style.css';
import nobleFarmsLogo from './img/noble-farms-logo.png';
import createElement from "./createElement.js";

import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import { stopCarousel } from './carousel.js';

const header = document.querySelector('header');
const divLogo = createElement('div', { id: 'logo' });
const imgLogo = createElement('img', { src: nobleFarmsLogo, alt: 'noble farms logo', class: 'img-logo' })
divLogo.appendChild(imgLogo);

const nav = header.querySelector('nav');
header.insertBefore(divLogo, nav);

const hr = createElement('hr', { class: 'stylish-hr'});
header.appendChild(hr);

const content = document.querySelector('#content');

home();

const navButton = document.querySelector('.nav-btn')
const homeButton = document.querySelector('.nav-btn.home')
const menuButton = document.querySelector('.nav-btn.menu')
const contactButton = document.querySelector('.nav-btn.contact')


homeButton.addEventListener("click", () => {
    content.innerHTML = '';
    stopCarousel();
    home();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = '';
    stopCarousel();
    menu();
});

contactButton.addEventListener("click", () => {
    content.innerHTML = '';
    stopCarousel();
    contact();
});