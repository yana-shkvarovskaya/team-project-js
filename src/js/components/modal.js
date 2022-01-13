import getRefs from '../refs';
import createModalFilm from '../data/create-modal.data';
import modal from '../../templates/modal.hbs';
import getTrailer from './get-trailer';//добавляет ютуб ролик
// import { currentStorage, changeStorage } from './library';

//firebase connect
import { initializeApp } from 'firebase/app';//https://www.npmjs.com/package/firebase
import {
  getDatabase,
  ref,
  get,
  set,
  remove,
} from 'firebase/database';
const firebaseConfig = {
apiKey: "AIzaSyCkGcqujxOrDVU9Olzs2GeAg5RVL6Rx6mU",
authDomain: "project-6349d.firebaseapp.com",
projectId: "project-6349d",
storageBucket: "project-6349d.appspot.com",
messagingSenderId: "1092606217949",
appId: "1:1092606217949:web:f3c739bc5b564639f45534",
measurementId: "G-YZR14G97E7"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
//firebase

const {
  insertPoint,
  //modalRef,
  modalСardRef,
  overlayBackgroundRef,
  overlayRef,
  clsBtnRef,
  
  //libraryLink,
} = getRefs();
let movieID;

insertPoint.addEventListener('click', onClickOnCard);
//Вешаем слушатели на кнопки
modalСardRef.addEventListener('click', onModalBtnClick);

async function onClickOnCard(e) {
  if (e.target.nodeName !== 'UL') {
    e.preventDefault();

    //Получаем ID фильма из data-атрибута, делаем запрос по ID на API-сервис
    const imgRef = e.target.parentNode.querySelector('img');
    const result = await createModalFilm(imgRef.dataset.src);
    movieID = result.id;
    //Получаем разметку модального окна по шаблону и вставляем ее модальное окно
    modalСardRef.insertAdjacentHTML('beforeend', modal(result));

    //Добавляем данные фильма в LS для возможного добавления карточки в библиотеку
    addItemToLocalStorage(result);
    addItemToFirebase(result);
    getTrailer(movieID);//!!!!!!!!!!!!добавляет ютуб ролик
    //Показываем фоновый постер с оверлеем
    overlayBackgroundRef.classList.add('is-open');
    overlayRef.classList.add('is-open');
    
    overlayBackgroundRef.style.backgroundImage = `linear-gradient(rgb(255, 255, 255, 0.1), rgb(255, 255, 255, 0.1)), url("${result.backdrop}")`;
    //Проверяем, есть ли текущий фильм в библиотеке, если да - делаем активными соотв. кнопки
    setButtonView(movieID, modalСardRef.querySelector('#btn-add-watched'));
    setButtonView(movieID, modalСardRef.querySelector('#btn-add-to-queue'));
    //Варианты закрытия модального окна: кнопка закрытия, клик по оверлею, ESC
    clsBtnRef.addEventListener('click', closeModal);
    overlayRef.addEventListener('click', e => {
      if (e.target === overlayRef) closeModal();
    });
    window.addEventListener('keydown', e => {
      const trailerRef = document.querySelector('.basicLightbox');
      if (e.code === 'Escape' && !trailerRef) closeModal();
    });
  }
}

function onModalBtnClick(e) {
  if (e.target.nodeName === 'BUTTON' && !e.target.classList.contains('modal-form__trailer')) {
    if (e.target.classList.contains('btn--active'))
      deleteItemFromLibrary(e.target.dataset.lib, movieID);
    else addItemToLibrary(e.target.dataset.lib);
    addItemToLibraryFirebase(e.target.dataset.lib);
    setButtonView(movieID, e.target);
  }
}
//localStorage add
function addItemToLocalStorage(res) {
  localStorage.setItem('ky', JSON.stringify(res));
}
//firebase add + remove
function addItemToFirebase(result) {
  set(ref(db, 'ky'), result);
}
function removeItemToFirebase() {
  remove(ref(db, 'ky'));
}
//localStorage addItemToLibrary
function addItemToLibrary(collection) {
  let arrLib = JSON.parse(localStorage.getItem(collection));
  if (!arrLib) arrLib = [];
  arrLib.push(JSON.parse(localStorage.getItem('ky')));
  localStorage.setItem(collection, JSON.stringify(arrLib));
}
//firebase addItemToLibrary
function addItemToLibraryFirebase(collection) {
  let arr = [];
  get(ref(db, 'ky')).then(data => {
    // console.log(data.val());
    arr.push(data.val());
    // console.log('массив из базы', arr);
    set(ref(db, collection), arr).then(); //data => console.log(data));
  });

}
function deleteItemFromLibrary(collection, id) {
  let arrLib = JSON.parse(localStorage.getItem(collection));
  let arrRes = JSON.stringify(arrLib.filter(el => el.id !== id));
  localStorage.setItem(collection, arrRes);
}

function setButtonView(movieID, btnRef) {
  let arrFromLS = JSON.parse(localStorage.getItem(btnRef.dataset.lib));
  if (!arrFromLS) arrFromLS = [];

  if (arrFromLS.some(el => el.id === movieID)) {
    btnRef.classList.add('btn--active');
    btnRef.textContent = btnRef.dataset.textlib;
    return;
  }
  btnRef.classList.remove('btn--active');
  btnRef.textContent = btnRef.dataset.textcont;
}

function closeModal() {
  modalСardRef.innerHTML = '';
  //themeSwitch.classList.remove('disabled');
  overlayBackgroundRef.classList.remove('is-open');
  overlayRef.classList.remove('is-open');
  clsBtnRef.removeEventListener('click', closeModal);
  overlayRef.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeModal);
  localStorage.removeItem('ky');
  removeItemToFirebase();
  // if (libraryLink.classList.contains('active')) changeStorage(currentStorage);//!!!!!
}
