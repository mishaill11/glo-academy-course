'use strict';
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import movePage from './modules/movePage';
import showPopup from './modules/showPopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';
import comand from './modules/comand';
import sendForm from './modules/sendForm';
import validator from '../plugins/validator/validator';

countTimer();

toggleMenu();

movePage();

showPopup();

tabs();

slider();

sliderCarousel();
    
calc(100);

comand();

validator();

sendForm('#form1');
sendForm('#form2');
sendForm('#form3');
