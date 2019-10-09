'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import showNumber from './modules/showNumber';
import showMenu from './modules/showMenu';
import movePage from './modules/movePage';
import fullList from './modules/fullList';
import maskPhone from './modules/maskPhone';
import privacy from './modules/privacy';
import hintBoard from './modules/hintBoard';
import hintMobileSlider from './modules/hintMobileSlider';
import repairTypes from './modules/repairTypes';
import repairTypesSliders from './modules/repairTypesSliders';
import portfolioSlider from './modules/portfolioSlider';
import transparencySlider from './modules/transparencySlider';
import design from './modules/design';
import tabs from './modules/tabs';
import accordeon from './modules/accordeon';
import consult from './modules/consult';
import reviews from './modules/reviews';
import carousel from './modules/carousel';

showNumber();
showMenu();
movePage();
fullList();
maskPhone('#feedback-input1');
maskPhone('#feedback-input2');
maskPhone('#feedback-input3');
maskPhone('#feedback-input4');
maskPhone('#feedback-input5');
maskPhone('#feedback-input6');
privacy();
hintBoard();
hintMobileSlider();
repairTypes();
repairTypesSliders();
portfolioSlider();
transparencySlider();
design();
tabs();
accordeon();
consult();
reviews();
carousel();
