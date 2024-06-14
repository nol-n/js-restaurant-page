import './style.css';
import createElement from "./createElement.js";
import nobleFarmsChicken from './img/noble-farms-chicken.png';
import nobleFarmsBrisket from './img/noble-farms-brisket.png';
import nobleFarmsSalmon from './img/noble-farms-salmon.png';
import nobleFarmsBeef from './img/noble-farms-beef.png';

export default function menu() {

    const menuHeader = createElement('h2');
    menuHeader.textContent = 'Menu';

    // Menu Item 1
    const menuItem1 = createElement('div', { class: 'menu-item'} );
    const menuPicContainer1 = createElement('div', { class: 'menu-pic-container'} );
    const menuPic1 = createElement('img', { src: nobleFarmsChicken, class: 'menu-pic'} );
    menuPicContainer1.appendChild(menuPic1);

    const menuDesc1 = createElement('div', { class: 'menu-desc'} );
    const menuItemName1 = createElement('h6', { class: 'menu-item-name'} );
    menuItemName1.textContent = 'Roasted Herb Chicken';
    const menuText1 = createElement('p', { class: 'menu-text'} );
    menuText1.textContent = 'Succulent, herb-seasoned chicken with crispy skin, served with golden roasted potatoes and a fresh garden salad. Accompanied by creamy herb aioli.';
    const menuPrice1 = createElement('span', { class: 'menu-price'} );
    menuPrice1.textContent = 'Price: $21.99';
    menuDesc1.appendChild(menuItemName1);
    menuDesc1.appendChild(menuText1);
    menuDesc1.appendChild(menuPrice1);

    menuItem1.appendChild(menuPicContainer1);
    menuItem1.appendChild(menuDesc1);

    // Menu Item 2
    const menuItem2 = createElement('div', { class: 'menu-item'} );
    const menuPicContainer2 = createElement('div', { class: 'menu-pic-container'} );
    const menuPic2 = createElement('img', { src: nobleFarmsBrisket, class: 'menu-pic'} );
    menuPicContainer2.appendChild(menuPic2);

    const menuDesc2 = createElement('div', { class: 'menu-desc'} );
    const menuItemName2 = createElement('h6', { class: 'menu-item-name'} );
    menuItemName2.textContent = 'Smoked BBQ Brisket Plate';
    const menuText2 = createElement('p', { class: 'menu-text'} );
    menuText2.textContent = 'Tender, slow-smoked BBQ brisket, served with grilled corn on the cob, savory roasted vegetables, and a side of creamy slaw.';
    const menuPrice2 = createElement('span', { class: 'menu-price'} );
    menuPrice2.textContent = 'Price: $25.99';
    menuDesc2.appendChild(menuItemName2);
    menuDesc2.appendChild(menuText2);
    menuDesc2.appendChild(menuPrice2);

    menuItem2.appendChild(menuPicContainer2);
    menuItem2.appendChild(menuDesc2);

    // Menu Item 3
    const menuItem3 = createElement('div', { class: 'menu-item'} );
    const menuPicContainer3 = createElement('div', { class: 'menu-pic-container'} );
    const menuPic3 = createElement('img', { src: nobleFarmsSalmon, class: 'menu-pic'} );
    menuPicContainer3.appendChild(menuPic3);

    const menuDesc3 = createElement('div', { class: 'menu-desc'} );
    const menuItemName3 = createElement('h6', { class: 'menu-item-name'} );
    menuItemName3.textContent = 'Grilled Salmon with Rice and Broccolini';
    const menuText3 = createElement('p', { class: 'menu-text'} );
    menuText3.textContent = 'Deliciously grilled salmon fillet, served with fragrant rice pilaf and tender broccolini, garnished with fresh herbs.';
    const menuPrice3 = createElement('span', { class: 'menu-price'} );
    menuPrice3.textContent = 'Price: $22.99';
    menuDesc3.appendChild(menuItemName3);
    menuDesc3.appendChild(menuText3);
    menuDesc3.appendChild(menuPrice3);

    menuItem3.appendChild(menuPicContainer3);
    menuItem3.appendChild(menuDesc3);

    // Menu Item 4
    const menuItem4 = createElement('div', { class: 'menu-item'} );
    const menuPicContainer4 = createElement('div', { class: 'menu-pic-container'} );
    const menuPic4 = createElement('img', { src: nobleFarmsBeef, class: 'menu-pic'} );
    menuPicContainer4.appendChild(menuPic4);

    const menuDesc4 = createElement('div', { class: 'menu-desc'} );
    const menuItemName4 = createElement('h6', { class: 'menu-item-name'} );
    menuItemName4.textContent = 'Beef Wellington with Mashed Potatoes';
    const menuText4 = createElement('p', { class: 'menu-text'} );
    menuText4.textContent = 'Elegant Beef Wellington, featuring tender beef wrapped in puff pastry with a mushroom duxelles, served alongside creamy mashed potatoes.';
    const menuPrice4 = createElement('span', { class: 'menu-price'} );
    menuPrice4.textContent = 'Price: $29.99';
    menuDesc4.appendChild(menuItemName4);
    menuDesc4.appendChild(menuText4);
    menuDesc4.appendChild(menuPrice4);

    menuItem4.appendChild(menuPicContainer4);
    menuItem4.appendChild(menuDesc4);

    content.appendChild(menuHeader);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);

}