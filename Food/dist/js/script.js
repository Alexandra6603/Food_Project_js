require('es6-promise').polyfill();

import tabs from './modules/tabs';
import modalWindow from './modules/modalWindow'
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import sliders from './modules/sliders';
import forms from './modules/forms';
import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modalWindow('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-11');
    cards();
    calc();
    sliders({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totelCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    forms('form', modalTimerId);

});

