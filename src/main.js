import searchImages from './js/pixabay-api';

const fetchSearchBtn = document.querySelector('.btn');
const inputSearch = document.querySelector('.search-input');

let search = '';

inputSearch.addEventListener('input', event => {
  search = event.currentTarget.value;
});

fetchSearchBtn.addEventListener('click', event => {
  event.preventDefault();
  searchImages(search);
});
