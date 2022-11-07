export function createFlagMarkup(countries) {
  return countries
    .map(({ name, flags }) => {
      return `
            
                     <li class = "country-list-item">
                     <img class = "country-list-img" src="${flags.svg}" alt="Flag of ${name.official}"
                     <p class = "country-list-text">${name.official}</p>
                      </li>
              
               `;
    })
    .join('');
}

export function createCountriesMarkup(countries) {
  return countries
    .map(({ capital, population, languages }) => {
      return `
              <ul class ="country-info-list">
                   <li class = "country-info-item">
                   <p class = "country-info-text"><b>Capital:</b>  ${capital}</p>
                    </li>
                    <li class = "country-info-item">
                   <p class = "country-info-text"><b>Population:</b>  ${population}</p>
                    </li>
                    <li class = "country-info-item">
                   <p class = "country-info-text"><b>Languages:</b>  ${Object.values(
                     languages
                   )}</p>
                    </li>
              </ul>
             `;
    })
    .join('');
}
