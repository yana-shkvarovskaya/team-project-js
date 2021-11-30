const preloader = document.querySelector('.preloader');

// if (document.documentElement.hasAttribute('data-theme')) {
//         preloader.style.background = "gray";
//     }
window.onload = function () {
  preloader.classList.add('hide');
  setTimeout(function () {
    preloader.classList.add('hidden');
  }, 900);
};
