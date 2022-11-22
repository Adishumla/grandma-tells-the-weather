const hero_section = document.querySelector('.hero-section');
const hero_section_img = document.querySelector('.hero-section-img');
const hero_section_text = document.querySelector('.hero-section-text');

hero_section_img.innerHTML = `<img src="images/grandma-hero.jpeg" alt="hero-section-img">`;

const weather_api =
  'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=426e12283a0265ba90139227443f2152';

/* Fetching the weather data from the API in eurpean units*/
fetch(weather_api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    hero_section_text.innerHTML = `
    <h1>I looked outside, it's ${data.main[0]}</h1>
    <p class="hero-section-text">The weather in ${data.name} is ${
      data.weather[0].description
    } with a temperature of ${Math.round(data.main.temp - 273.15)}°C</p>
  `;
  });
