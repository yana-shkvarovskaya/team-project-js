import API from '../API/api-service';
// import card from '../../templates/cardMovie';
// import { fetchMovieGenre } from '../API/api-service';

const api = new API();

const refs = {
  decrBtn: document.querySelector('.header__increase-btn'),
  incrBtn: document.querySelector('.header__decrease-btn'),
  releaseDecrBtn: document.querySelector('.header__asc-btn'),
  releaseIncrBtn: document.querySelector('.header__desc-btn'),
  nav: document.querySelector('#nav'),
  menuWrapper: document.querySelector('.header__wrapper'),
  menuBar: document.querySelector('.header__menu-bar'),
  ratingItem: document.querySelector('.header__rating-item'),
  releaseItem: document.querySelector('.header__release-item'),
};

refs.decrBtn.addEventListener('click', sortDecrement);
refs.incrBtn.addEventListener('click', sortIncrement);
refs.releaseDecrBtn.addEventListener('click', sortReleaseDecrement);
refs.releaseIncrBtn.addEventListener('click', sortReleaseIncrement);

const values = refs.nav.children;

function sortDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') > +values[j].getAttribute('data-rate')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function sortIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') < +values[j].getAttribute('data-rate')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}
function sortReleaseDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') > +values[j].getAttribute('data-release')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function sortReleaseIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') < +values[j].getAttribute('data-release')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
