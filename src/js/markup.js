// name.official
// flags.svg

// capital
// population
// languages
const countries = document.querySelector('.country-info');
const cardsCountriesMarkup = createCountriesMarkup(countryInfo);
countries.insertAdjacentHTML('afterbegin', cardsCountriesMarkup);
const flag = document.querySelector('.country-list');
const cardsMarkup = createFlagMarkup(countryList);
flag.insertAdjacentHTML('afterbegin', cardsMarkup);

function createCountriesMarkup(countryInfo) {
  return countryInfo
    .map(({ capital, population, languages }) => {
      return `
              <ul class ="country-info-list">
                   <li class = "country-info-item">
                   <p class = "country-info-text">Capital: ${capital}</p>
                    </li>
                    <li class = "country-info-item">
                   <p class = "country-info-text">Population: ${population}</p>
                    </li>
                    <li class = "country-info-item">
                   <p class = "country-info-text">Languages: ${languages}</p>
                    </li>
              </ul>
             `;
    })
    .join('');
}

function createFlagMarkup(countryList) {
  return countryList
    .map(({ name, flags }) => {
      return `
            
                     <li class = "country-list-item">
                     <img class = "country-list-img" src="${flags.svg}" alt="Flag of ${name.official}" width = "20" height = "20">
                     <p class = "country-list-text">${name.official}</p>
                      </li>
              
               `;
    })
    .join('');
}
