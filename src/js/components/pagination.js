import Pagination from 'tui-pagination';
import getRefs from '../refs';
import { clearGallery, createMarkup, searchBy } from '../components/get-popular';
import { changeStorage, currentStorage } from '../components/library';
/* import {searchBy } from '../components/search'; */
const { paginationBox } = getRefs();

export let currentPage = 1;

let options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,

  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(paginationBox, options);

function paginationReset(number, currentPage) {
  pagination.reset(number);
  pagination._paginate(currentPage);
}

pagination.on('afterMove', event => {
  currentPage = event.page;
  console.log(currentPage);
  clearGallery();
  window.scroll(0, 0);
  paginationBox.classList.add('visually-hidden');
  if (currentStorage === 'Queue') {
    changeStorage('Watched', currentPage);
  } else if (currentStorage === 'Watched') {
    changeStorage('Watched', currentPage);
  } else if (searchBy === 'query') {
    onSearchInput();
  } else {
    createMarkup();
  }
  return currentPage;
});

export { pagination, paginationReset, options };
