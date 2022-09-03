const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const countriesContainer = document.getElementById('countries-container');
const displayCountries = countries => {
    for(const country of countries ){
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <h3>Official Name: ${country.name.official} </h3>
        <h3>Capital: ${country.capital ? country.capital : 'No Capital'} </h3>
        <button onclick="loadDetails('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv);
    }
}


function loadDetails(cca2){
    fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
    .then(res => res.json())
    .then(data => displayCountryDetail(data));
}

function displayCountryDetail(data){
    console.log(data);
    const countryDetailDiv = document.getElementById('country-detail1');
        countryDetailDiv.innerHTML = `
        <h2>Common name: ${data[0].name.common} </h2>
        <h2>Area: ${data[0].area} Sq KM </h2>
        <h2>Population: ${data[0].population} </h2>
        <h2>Flag: </h2>
        
        <img src="${data[0].flags.png}" alt="">
        
        `
}
loadCountries();

