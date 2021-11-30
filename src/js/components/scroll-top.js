const topBtn = document.querySelector('.scroll-top');

topBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', onScroll);

function onScroll() {
  if (window.scrollY > 400) {
    topBtn.classList.remove('hide');
  } else {
    topBtn.classList.add('hide');
  }
}

function scrollToTop() {
  window.scroll(0, 0);
  topBtn.style.transform = 'translate(0, -700px)';
  setTimeout(function () {
    topBtn.style.transform = 'translate(0, 0)';
  }, 2000);
}
