import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const r = fetch('https://restcountries.com/v3.1/name/')
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
  })
  .catch(error => {
    console.log(error);
  });
