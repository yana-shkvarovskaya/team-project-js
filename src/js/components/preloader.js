// const preloader = document.querySelector('.preloader');

import getRefs from '../refs';

const { preloader } = getRefs();

// if (document.documentElement.hasAttribute('data-theme')) {
//         preloader.style.background = "gray";
//     }
window.onload = function () {
  preloader.classList.add('hide');
  setTimeout(function () {
    preloader.classList.add('hidden');
  }, 900);
};
