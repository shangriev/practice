const apiKey = '83195d0b59df5025218d4608dbf24038';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    
    if (response.status == 404 ) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {

        var data = await response.json();

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' m/s'
    
        if (data.weather[0].main == 'Сlouds') {
            weatherIcon.src = 'images/clouds.png'
        } else if(data.weather[0].main == 'Сlear') {
            weatherIcon.src = 'images/clear.png'
        } else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png'
        } else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png'
        } else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        } else {
            weatherIcon.src = 'images/clear.png'
        }
    
        document.querySelector('.weather').style.display = 'block';

    }



    
}

    const search = searchBtn.addEventListener('click', searchFn);
    function searchFn() {
        checkWeather(searchBox.value);
        searchBox.value = '';
    }


searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { 
    event.preventDefault();
    searchFn();
    }
});