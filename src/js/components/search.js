// import API from '../API/api-service';
import card from '../../templates/cardMovie';
// import createCardData from '../data/create-card-data';

const refs = {
  searchForm: document.querySelector('.search-form'),
  //   searchInput: document.querySelector('.search-input'),
  //   searchBtn: document.querySelector('.search-btn'),
  //   imagesContainer: document.querySelector('.gallery'),
  insertPoint: document.querySelector('.hero__list'),
};

// import getRefs from '../refs/get-refs';
import API from '../API/api-service';
// import searchErr from './search-error';
// import card from '../../handlebars/cardMovie.hbs';
// import renderPagination from './pages';
// const { searchForm, insertPoint } = getRefs();

const api = new API();

// import { startSpinner, stopSpinner } from './spinner.js';
import createCardData from '../data/create-card-data';

refs.searchForm.addEventListener('submit', onSearchInput);

async function onSearchInput(e) {
  e.preventDefault();
  const value = e.currentTarget.elements.query.value;
  if (!value.trim()) return;
  initialReset();

  try {
    api.setQuery(value);
    // startSpinner();
    const data = await api.fetchMovieSearchQuery();
    console.log(data);
    const result = await data.results;
    console.log(result);
    const markup = await createCardData(result);
    if (!result.length) {
      //   searchErr(true);
      //   stopSpinner();
      return;
    }
    refs.insertPoint.insertAdjacentHTML('beforeend', card(markup));
    // renderPagination('searchQuery', data.total_pages, value);
    // stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

function initialReset() {
  refs.insertPoint.innerHTML = '';
  //   searchErr(false);
  api.setPage(1);
}
