export default function getRefs() {
  return {
    // --- Header ---
    textError: document.querySelector('.header__search-error'),
    // --- Modal ---

    // --- Pages (pagination) ---

    // ---SCROLL-TOP---
    topBtn: document.querySelector('.scroll-top'),

    // ---PRELOADER---
    preloader: document.querySelector('.preloader'),

    // ---NIGHT MODE---
    nightModeBtn: document.querySelector('.night-mode-btn'),
    lightIcon: document.querySelector('.fa-sun'),
    darkIcon: document.querySelector('.fa-moon'),
    // --- Footer ---
    //footer-team-modal
    openTeamModal: document.querySelector('.footer-open-modal'),
    teamModal: document.querySelector('.team-modal'),
    btnCloseModal: document.querySelector('.close'),
  };
}
