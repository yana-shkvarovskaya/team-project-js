import API from '../API/api-service';
import getRefs from '../refs';
import card from '../../templates/cardMovie';
import createCardData from '../data/create-card-data';
import { startSpinner, stopSpinner } from './preloader';
import { paginationSetTotalItems } from '../components/pagination';

const axios = require('axios').default;

const { galleryList, paginationBox } = getRefs();

const api = new API();

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
const filterGenre = document.querySelector('.filter-genre');
const buttonsCreated = onCreateButtons(genres);

/* const genresArray = JSON.parse(genres);
console.log(genresArray); */

function onCreateButtons(genres) {
  return genres
    .map(genre => {
      return `<button type='button' data-name='${genre.id}' class="genreBtn">${genre.name}</button>`;
    })
    .join('');
}

filterGenre.insertAdjacentHTML('beforeend', buttonsCreated);

filterGenre.addEventListener('click', genreFilter);

async function genreFilter(event) {
  paginationBox.classList.add('visually-hidden');
  clearGallery();
  const name = event.target.dataset.name;
  console.log(name);
  startSpinner();
  try {
    const result = await api.fetchMovieFilterGenre();
    console.log(result);
    const results = await result.results;
    console.log(results);
    const array = results.filter(({ genre_ids }) => genre_ids.includes(Number(name)));

    console.log(array);
    const markup = await createCardData(array);

    galleryList.insertAdjacentHTML('beforeend', card(markup));
    if (array.length) {
      paginationSetTotalItems(result.total_results);
      paginationBox.classList.remove('visually-hidden');
    }
    stopSpinner();
  } catch (error) {
    console.error(error);
  }
}

export function clearGallery() {
  galleryList.innerHTML = '';
}
