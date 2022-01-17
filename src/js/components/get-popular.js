import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
import { paginationReset, currentPage } from '../components/pagination';
/* import { currentPage } from '../components/library'; */

const { galleryList, paginationBox } = getRefs();

const api = new API();
export let searchBy = '';

export async function createMarkup() {
  searchBy = 'popularity';
  startSpinner();

  try {
    const result = await api.fetchMovieTrending();
    console.log(result);
    const results = await result.results;
    const markup = await createCardData(results);
    paginationReset(result.total_results, currentPage);
    paginationBox.classList.remove('visually-hidden');
    galleryList.insertAdjacentHTML('beforeend', card(markup));
    console.log(markup);

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

export function clearGallery() {
  galleryList.innerHTML = '';
}
