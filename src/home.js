import './style.css';
import { prevSlide, nextSlide, startCarousel } from "./carousel.js";
import nobleFarmsBrisket from './img/noble-farms-brisket.png';
import nobleFarmsChicken from './img/noble-farms-chicken.png';
import nobleFarmsSalmon from './img/noble-farms-salmon.png';
import nobleFarmsBeef from './img/noble-farms-beef.png';

import createElement from "./createElement.js";

export default function home() {
    const carousel = createElement('div', { id: 'carousel' });
    const carouselInner = createElement('div', { class: 'carousel-inner' });
    const carouselItemActive = createElement('div', { class: 'carousel-item active' });
    const carouselPhoto1 = createElement('img', { src: nobleFarmsChicken, class: 'carousel-photo', alt: 'menu item 1' });
    carouselItemActive.appendChild(carouselPhoto1);
    carouselInner.appendChild(carouselItemActive);

    const carouselItem1 = createElement('div', { class: 'carousel-item' });
    const carouselPhoto2 = createElement('img', { src: nobleFarmsBrisket, class: 'carousel-photo', alt: 'menu item 2' });
    carouselItem1.appendChild(carouselPhoto2);
    carouselInner.appendChild(carouselItem1);

    const carouselItem2 = createElement('div', { class: 'carousel-item' });
    const carouselPhoto3 = createElement('img', { src: nobleFarmsSalmon, class: 'carousel-photo', alt: 'menu item 3' });
    carouselItem2.appendChild(carouselPhoto3);
    carouselInner.appendChild(carouselItem2);

    const carouselItem3 = createElement('div', { class: 'carousel-item' });
    const carouselPhoto4 = createElement('img', { src: nobleFarmsBeef, class: 'carousel-photo', alt: 'menu item 3' });
    carouselItem3.appendChild(carouselPhoto4);
    carouselInner.appendChild(carouselItem3);

    const prevButton = createElement('button', { class: 'carousel-control prev' });
    prevButton.textContent = '❮';
    prevButton.addEventListener('click', prevSlide);
    const nextButton = createElement('button', { class: 'carousel-control next' });
    nextButton.textContent = '❯';
    nextButton.addEventListener('click', nextSlide);

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    content.appendChild(carousel);
    startCarousel();

    const about = createElement('div', { id: 'about' });
    const aboutHeader = createElement('h3', { class: 'header' });
    aboutHeader.textContent = 'About';
    const aboutText = document.createElement('p');
    aboutText.innerHTML = 'Welcome to <strong>Noble Farms</strong>, where every bite is a testament to the beauty of nature and the art of sustainable living. Our farm-to-mouth philosophy ensures that each dish is crafted with the freshest produce and ethically raised meats, all grown on our own land. Immerse yourself in a dining experience that celebrates creativity, sustainability, and the finest flavors, meticulously cultivated from our fields to your table.';
    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    const extraInfo = createElement('div', { id: 'extra-info'});
    
    const hours = createElement('div', { id: 'hours' });
    const hoursHeader = createElement('h3', { class: 'header' });
    hoursHeader.textContent = 'Hours';
    const hoursText1 = document.createElement('p');
    hoursText1.textContent = 'Monday - Friday: 12pm - 8pm';
    const hoursText2 = document.createElement('p');
    hoursText2.textContent = 'Saturday: 12pm - 10pm';
    const hoursText3 = document.createElement('p');
    hoursText3.textContent = 'Sunday: 10am - 8pm';
    hours.appendChild(hoursHeader);
    hours.appendChild(hoursText1);
    hours.appendChild(hoursText2);
    hours.appendChild(hoursText3);
    extraInfo.appendChild(hours);

    const location = createElement('div', { id: 'location' });
    const locationHeader = createElement('h3', { class: 'header' });
    locationHeader.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.innerHTML = '123 Abc Boulevard <br /> Los Angeles, CA <br />90001';
    location.appendChild(locationHeader);
    location.appendChild(locationText);
    extraInfo.appendChild(location);

    content.appendChild(about);
    content.appendChild(extraInfo);
}