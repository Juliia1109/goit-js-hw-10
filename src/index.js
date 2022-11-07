import './css/styles.css';
import { createCountriesMarkup, createFlagMarkup } from './js/markup';
import API from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

inputSearch.addEventListener(
  'input',
  debounce(handleInputSearch, DEBOUNCE_DELAY)
);

function handleInputSearch(event) {
  event.preventDefault();
  const searchQuery = inputSearch.value.trim();
  if (searchQuery === '') {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
    return;
  }

  // fetchCountries(searchQuery)
  //   .then(countries => {
  //     countryList.innerHTML = '';
  //     countryInfo.innerHTML = '';
  //     if (countries.length === 1) {
  //       countryList.insertAdjacentHTML(
  //         'beforeend',
  //         createCountriesMarkup(countries)
  //       );
  //       countryInfo.insertAdjacentHTML(
  //         'beforeend',
  //         createFlagMarkup(countries)
  //       );
  //     } else if (countries.length >= 10) {
  //       onManyMatches();
  //     } else {
  //       countryList.insertAdjacentHTML(
  //         'beforeend',
  //         createCountriesMarkup(countries)
  //       );
  //     }
  //   })
  //   .catch(onFetchError);
  API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderCountryCard(countries) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  if (countries.length === 1) {
    countryList.insertAdjacentHTML(
      'beforeend',
      createCountriesMarkup(countries)
    );
    countryInfo.insertAdjacentHTML('beforeend', createFlagMarkup(countries));
  } else if (countries.length >= 10) {
    onManyMatches();
  } else {
    countryList.insertAdjacentHTML(
      'beforeend',
      createCountriesMarkup(countries)
    );
  }
}

// const cardsCountriesMarkup = createCountriesMarkup(countries);
// countryInfo.innerHTML = cardsCountriesMarkup;
// const cardsMarkup = createFlagMarkup(countries);
// countryList.innerHTML = cardsMarkup;

function onFetchError() {
  Notiflix.Notify.warning(`Oops, there is no country with that name`);
}

function onManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
