import getRefs from '../refs';
import card from '../../templates/cardMovie.hbs';

export let currentStorage;
const {
  libraryLink,
  homeLink,
  btnWatched,
  btnQueue,
  header,
  headerForm,
  headerButton,
  galleryList,
  paginationBox,
} = getRefs();

btnWatched.addEventListener('click', watchedStorage);
btnQueue.addEventListener('click', queuedStorage);
libraryLink.addEventListener('click', openLibrary);

function openLibrary() {
  paginationBox.classList.add('visually-hidden');
  galleryList.innerHTML = '';
  header.classList.replace('header__background-home', 'header__background-library');
  homeLink.classList.remove('active');
  libraryLink.classList.add('active');
  headerForm.classList.add('disabled');
  headerButton.classList.remove('disabled');
  btnQueue.classList.add('in-active');
  queuedStorage();
}
function watchedStorage() {
  changeStorage('Watched');
  currentStorage = 'Watched';
  btnQueue.classList.remove('in-active');
  btnWatched.classList.add('in-active');
}

function queuedStorage() {
  changeStorage('Queue');
  currentStorage = 'Queue';
  btnWatched.classList.remove('in-active');
  btnQueue.classList.add('in-active');
}

export function changeStorage(value) {
  galleryList.innerHTML = '';
  let items = JSON.parse(localStorage.getItem(value));
  if (!items) return;
  let firstPageItems = items.slice(0, 20);
  galleryList.insertAdjacentHTML('beforeend', card(firstPageItems));
}
