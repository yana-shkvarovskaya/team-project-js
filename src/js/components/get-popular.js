import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
/* import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css'
 */

const { insertPoint } = getRefs();

const api = new API();

async function createMarkup() {
  startSpinner();
  try {
    const data = await api.fetchMovieTrending();
    const result = await data.data;
    const results = await result.results;
    const markup = await createCardData(results);

    insertPoint.insertAdjacentHTML('beforeend', card(markup));

    // let request = 'home';
    // renderPagination(request, result.total_pages);

    stopSpinner();
    // homeLink.classList.add('active');
    // libraryLink.classList.remove('active');
    // headerForm.classList.remove('disabled');
    // headerButton.classList.add('disabled');
  } catch (error) {
    console.error(error);
  }
}

createMarkup();

/* const container = document.getElementById('pagination');
const options = {
  totalItems: 20000,
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
const pagination = new Pagination(container, options);

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
}); */