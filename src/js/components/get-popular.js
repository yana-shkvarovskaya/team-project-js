import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
// import renderPagination from './pagination';

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
