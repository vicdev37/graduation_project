require('es6-promise').polyfill();
require('formdata-polyfill');
import calc from './parts/calc';
import form from './parts/form';
import slider from './parts/slider';
import tabs from './parts/tabs';
import timer from './parts/timer';
import modal from './parts/modal';

window.addEventListener('DOMContentLoaded', function () {
  'use strict';


  calc();
  form();
  slider();
  tabs();
  timer();
  modal();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}