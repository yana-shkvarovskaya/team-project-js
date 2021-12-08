const dropBtnSort = document.querySelector('.drop-btn');
const dropBtnfilter = document.querySelector('.drop-btn.filter');

const menuWrapperSort = document.querySelector('.wrapper.sort');
const menuWrapperFilter = document.querySelector('.wrapper.filter');

const menuBar = document.querySelector('.menu-bar');

const ratingSort = document.querySelector('.rating-sort');
const releaseSort = document.querySelector('.release-sort');
const ratingItem = document.querySelector('.rating-item');
const releaseItem = document.querySelector('.release-item');
const ratingBackBtn = document.querySelector('.back-rating-btn');
const releaseBackBtn = document.querySelector('.back-release-btn');

dropBtnSort.addEventListener('click', showWrapperSort);
dropBtnfilter.addEventListener('click', showWrapperFilter);
ratingSort.addEventListener('click', showRatingSort);
releaseSort.addEventListener('click', showReleaseSort);
ratingBackBtn.addEventListener('click', backToMainSort);
releaseBackBtn.addEventListener('click', backToMainSort);

function showWrapperSort() {
  menuWrapperSort.classList.toggle('show');
}
function showWrapperFilter() {
  menuWrapperFilter.classList.toggle('show');
}

function showRatingSort() {
  menuBar.style.marginLeft = '-200px';
  setTimeout(() => {
    ratingItem.style.display = 'block';
  }, 100);
}

function showReleaseSort() {
  menuBar.style.marginLeft = '-200px';
  setTimeout(() => {
    releaseItem.style.display = 'block';
  }, 100);
}

function backToMainSort() {
  menuBar.style.marginLeft = '0px';
  setTimeout(() => {
    releaseItem.style.display = 'none';
    ratingItem.style.display = 'none';
  }, 100);
}
