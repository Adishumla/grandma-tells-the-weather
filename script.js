const hero_section = document.querySelector('.hero-section');
const hero_section_img = document.querySelector('.hero-section-img');
const hero_section_text = document.querySelector('.hero-section-text');

/* hero_section_img.innerHTML = `<img src="images/grandma-hero.jpeg" alt="hero-section-img">`;
 */
const weather_api =
  'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=426e12283a0265ba90139227443f2152';

const weather = ['Rain', 'Clouds', 'Clear', 'Snow', 'Thunderstorm', 'Drizzle'];

/* Fetching the weather data from the API in eurpean units*/
fetch(weather_api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const weather_index = weather.indexOf(data.weather[0].main);
    weather.splice(weather_index, 1);
    console.log(weather);
    const random_weather = weather[Math.floor(Math.random() * weather.length)];
    console.log(random_weather);
    hero_section_text.innerHTML = `
    <h1>It is Currently ${random_weather}</h1>
    <p class="hero-section-text">The weather in ${data.name} is ${
      data.weather[0].description
    } with a temperature of ${Math.round(data.main.temp - 273.15)}°C</p>
  `;
  });

const button_section = document.querySelector('.button-section');

//add a toggle button to the button section
button_section.innerHTML = `
  <button class="toggle-button">Toggle</button>
`;

const toggle_button = document.querySelector('.toggle-button');

//add a toggle function to the toggle button
toggle_button.addEventListener('click', () => {
  hero_section.classList.toggle('toggle');
});

// animate the button when toggled
toggle_button.addEventListener('click', () => {
  toggle_button.classList.toggle('toggle');
});

// get credits section
const credits_section = document.querySelector('.credits-section');

const credits =
  'https://api.themoviedb.org/3/movie/550/credits?api_key=362af9da1ef46b3f25052bb20767461f&language=en-US';

// fetch the credits from the API
fetch(credits)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const cast = data.cast;
    // innerhtml the credits like from a movie with foreach
    credits_section.innerHTML = `
    <h1>Cast</h1>
    <!-- sections for each department -->
    <section class="cast-section">
      <h2>Cast</h2>
      <ul class="cast-list">
        ${cast.map((cast) => {
          return `
          <li class="cast-list-item">
            <p>${cast.known_for_department}</p>
            <p>${cast.name}</p>
          </li>
    `;
        })}
      </ul>
    </section>
  `;
  });
