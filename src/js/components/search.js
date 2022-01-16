import card from '../../templates/cardMovie';
import getRefs from '../refs';
import API from '../API/api-service';
import searchErr from './search-error';
import { startSpinner, stopSpinner } from './preloader';

const refs = {
  searchForm: document.querySelector('.header__search-form'),
  /* insertPoint: document.querySelector('.gallery__list'), */
  preloader: document.querySelector('.preloader'),
};

const { galleryList, paginationBox } = getRefs();

const api = new API();

import createCardData from '../data/create-card-data';

refs.searchForm.addEventListener('submit', onSearchInput);

async function onSearchInput(e) {
  e.preventDefault();
  paginationBox.classList.add('visually-hidden');
  const value = e.currentTarget.elements.query.value;
  if (!value.trim()) return;
  initialReset();

  try {
    api.setQuery(value);
    startSpinner();
    const data = await api.fetchMovieSearchQuery();
    console.log(data);
    const result = await data.results;
    console.log(result);
    const markup = await createCardData(result);
    if (!result.length) {
      searchErr(true);
      stopSpinner();
      return;
    }
    /* refs.insertPoint.insertAdjacentHTML('beforeend', card(markup)); */
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

function initialReset() {
  /* refs.insertPoint.innerHTML = ''; */
  galleryList.innerHTML = '';
  searchErr(false);
  api.setPage(1);
}
