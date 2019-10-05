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

showNumber();
showMenu();
movePage();
fullList();
maskPhone('#feedback-input1');
maskPhone('#feedback-input2');
maskPhone('#feedback-input3');
maskPhone('#feedback-input4');
maskPhone('#feedback-input5');