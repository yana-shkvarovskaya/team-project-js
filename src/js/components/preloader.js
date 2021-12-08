// const preloader = document.querySelector('.preloader');

import getRefs from '../refs';

const { preloader } = getRefs();

window.onload = function () {
  preloader.classList.add('hide');
  setTimeout(function () {
    preloader.classList.add('hidden');
  }, 900);
};

function startSpinner() {
  preloader.classList.remove('hidden');
  preloader.classList.remove('hide');
  preloader.style.background = 'transparent';
}

function stopSpinner() {
  preloader.classList.add('hidden');
  preloader.classList.add('hide');
}

export { startSpinner, stopSpinner };
