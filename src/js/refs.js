export default function getRefs() {
  return {
    // --- Header ---
    textError: document.querySelector('.header__search-error'),
    btnWatched: document.querySelector('#btn-watched'), //
    btnQueue: document.querySelector('#btn-queue'), //
    libraryLink: document.querySelector('#library-link'),
    homeLink: document.querySelector('#home-link'),
    header: document.querySelector('#header'),
    headerForm: document.querySelector('.header__form'),
    headerButton: document.querySelector('.header__button'),

    // --- GALLERY ---
    galleryList: document.querySelector('.gallery__list'),
    // --- Modal ---
    modalСardRef: document.querySelector('.modal-form__card'), //modal.html
    overlayRef: document.querySelector('.overlay'), //modal.html
    overlayBackgroundRef: document.querySelector('.overlay__bg'), //modal.html
    clsBtnRef: document.querySelector('.modal-form__close-btn'), //modal.html
    // --- Pages (pagination) ---

    // ---SCROLL-TOP---
    topBtn: document.querySelector('.scroll-top'),

    // ---PRELOADER---
    preloader: document.querySelector('.preloader'),

    // ---NIGHT MODE---
    nightModeBtn: document.querySelector('.night-mode-btn'),
    lightIcon: document.querySelector('.fa-sun'),
    darkIcon: document.querySelector('.fa-moon'),

    mainContainer: document.querySelector('.main'),
    // --- Footer ---
    //footer-team-modal
    openTeamModal: document.querySelector('.footer-open-modal'),
    teamModal: document.querySelector('.team-modal'),
    btnCloseModal: document.querySelector('.close'),
  };
}
