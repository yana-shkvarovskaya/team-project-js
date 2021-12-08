import API from '../API/api-service';
// import card from '../../templates/cardMovie';
// import { fetchMovieGenre } from '../API/api-service';

const api = new API();

const refs = {
  decrBtn: document.querySelector('.increase-btn'),
  incrBtn: document.querySelector('.decrease-btn'),
  releaseDecrBtn: document.querySelector('.asc-btn'),
  releaseIncrBtn: document.querySelector('.desc-btn'),
  nav: document.querySelector('#nav'),
  menuWrapper: document.querySelector('.wrapper.sort'),
  menuBar: document.querySelector('.menu-bar'),
  ratingItem: document.querySelector('.rating-item'),
  releaseItem: document.querySelector('.release-item'),
  filterList: document.querySelector('.menu-bar.filter'),
  filterItems: document.querySelectorAll('.gallery__item'),
};

refs.decrBtn.addEventListener('click', sortDecrement);
refs.incrBtn.addEventListener('click', sortIncrement);
refs.releaseDecrBtn.addEventListener('click', sortReleaseDecrement);
refs.releaseIncrBtn.addEventListener('click', sortReleaseIncrement);
// refs.genreItem.addEventListener('click', filterMoviesByGenre);

const values = refs.nav.children;

function sortDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') > +values[j].getAttribute('data-rate')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function sortIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-rate') < +values[j].getAttribute('data-rate')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}
function sortReleaseDecrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') > +values[j].getAttribute('data-release')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function sortReleaseIncrement() {
  for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
      if (+values[i].getAttribute('data-release') < +values[j].getAttribute('data-release')) {
        let replacedNode = refs.nav.replaceChild(values[j], values[i]);
        insertAfter(replacedNode, values[i]);
      }
    }
  }
  setTimeout(() => {
    refs.menuWrapper.classList.remove('show');
    refs.menuBar.style.marginLeft = '0px';
    refs.releaseItem.style.display = 'none';
    refs.ratingItem.style.display = 'none';
  }, 300);
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function filter() {
  refs.filterList.addEventListener('click', event => {
    const targetId = event.target.dataset.filter;
    console.log(targetId);

    switch (targetId) {
      case 'Action':
        refs.filterItems.forEach(filterItem => {
          console.log(filterItem);
          if (filterItem.classList.contains('Action')) {
            filterItem.style.display = 'block';
          } else {
            filterItem.style.display = 'none';
          }
        });
        break;
    }
  });
}

filter();
// async function filter(result) {
//   const genres = await api.fetchMovieGenre();

//   let cardList = [];

//   cardList = result.map(
//     ({ genre_ids, release_date, backdrop_path, poster_path, title, vote_average, id }) => {
//       const genres_type = [];

//       // console.log(genre_ids);

//       genre_ids.forEach(id => {
//         const genre = genres.find(genre => genre.id === id);

//         genres_type.push(genre.name);
//         // console.log(genre.name);
//         if (genre.name === 'Drama') {
//           console.log('success');
//         } else {
//           console.log('errorr');
//         }
//       });
//     },
//   );
//   console.log(cardList);
// }
