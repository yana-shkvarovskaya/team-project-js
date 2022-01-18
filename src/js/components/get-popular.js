import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
import { pagination, paginationReset } from '../components/pagination';

const { galleryList, paginationBox } = getRefs();
export let currentPage = 1;

const api = new API();

async function createMarkup() {
  window.scroll(0, 0);
  startSpinner();

  try {
    const result = await api.fetchMovieTrending();
    console.log(result);
    const results = await result.results;
    const markup = await createCardData(results);
    paginationReset(api.totalResults, currentPage);
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    paginationBox.classList.remove('visually-hidden');
    console.log(markup);

    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

createMarkup();

function clearGallery() {
  galleryList.innerHTML = '';
}

pagination.on('afterMove', event => {
  paginationBox.classList.add('visually-hidden');
  clearGallery();
  currentPage = event.page;
  console.log(currentPage);
  createMarkup();
  return currentPage;
});
