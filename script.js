// ⚠️ IMPORTANT: REPLACE THIS WITH YOUR VALID API KEY
const API_KEY = 'b9321491898579f281bd4b9d22a6fcf3'; 

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const geoBtn = document.getElementById('geo-btn');
const errorMsg = document.getElementById('error-message');

// DOM Elements to Update
const cityDisplay = document.getElementById('city-display');
const tempDisplay = document.getElementById('current-temp');
const descDisplay = document.getElementById('weather-condition');
const iconDisplay = document.getElementById('weather-icon');
const feelsLikeDisplay = document.getElementById('feels-like');
const humidityDisplay = document.getElementById('humidity');
const windDisplay = document.getElementById('wind-speed');
const hourlyContainer = document.getElementById('hourly-container');
const dailyContainer = document.getElementById('daily-container');
const outfitText = document.getElementById('outfit-text');
const activityText = document.getElementById('activity-text');

// Event Listeners
searchBtn.addEventListener('click', () => getWeather(cityInput.value));
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getWeather(cityInput.value);
});
geoBtn.addEventListener('click', getUserLocation);

// Initial Load
window.addEventListener('load', () => getWeather('London'));

// 1. Fetch Weather Data
async function getWeather(city) {
    if (!city) return;
    
    // Check if user forgot to set API Key
    if (API_KEY === 'YOUR_API_KEY_HERE' || API_KEY === '') {
        showError("Missing API Key. Check script.js");
        return;
    }

    try {
        errorMsg.classList.add('hidden');
        
        // Fetch Current Weather
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        
        if (weatherRes.status === 401) throw new Error("Invalid API Key");
        if (weatherRes.status === 404) throw new Error("City not found");
        
        const weatherData = await weatherRes.json();
        
        // Fetch Forecast (using coords from first call for accuracy)
        const { lat, lon } = weatherData.coord;
        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        const forecastData = await forecastRes.json();

        updateUI(weatherData, forecastData);

    } catch (error) {
        console.error(error);
        showError(error.message);
    }
}

// 2. Get User Location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
            // We reuse the fetch logic by just calling the API here
            // Simplified: Re-triggering search by city name is easier, but let's do direct fetch:
            try {
                const res = await fetch(url);
                const data = await res.json();
                getWeather(data.name); // Call main function with city name found
            } catch (err) {
                showError("Location error");
            }
        });
    } else {
        showError("Geolocation not supported");
    }
}

// 3. Update UI
function updateUI(current, forecast) {
    // Current
    cityDisplay.innerText = `${current.name}, ${current.sys.country}`;
    tempDisplay.innerText = `${Math.round(current.main.temp)}°`;
    descDisplay.innerText = current.weather[0].description;
    
    feelsLikeDisplay.innerText = `${Math.round(current.main.feels_like)}°`;
    humidityDisplay.innerText = `${current.main.humidity}%`;
    windDisplay.innerText = `${Math.round(current.wind.speed)} km/h`;

    // Icon
    const iconCode = current.weather[0].icon;
    iconDisplay.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconDisplay.classList.remove('hidden');

    // Suggestions
    updateSuggestions(current.main.temp, current.weather[0].main);

    // Hourly Forecast (Next 24h)
    hourlyContainer.innerHTML = '';
    // API returns every 3 hours. Take first 8 items = 24 hours.
    forecast.list.slice(0, 8).forEach(item => {
        const time = new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const div = document.createElement('div');
        div.className = 'hourly-item';
        div.innerHTML = `
            <span>${time}</span>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="icon">
            <span>${Math.round(item.main.temp)}°</span>
        `;
        hourlyContainer.appendChild(div);
    });

    // Daily Forecast (Process 5 days)
    dailyContainer.innerHTML = '';
    // Helper to get daily summary
    const dailyData = {};
    forecast.list.forEach(item => {
        const day = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
        if (!dailyData[day]) {
            dailyData[day] = { max: -100, min: 100, icon: item.weather[0].icon };
        }
        dailyData[day].max = Math.max(dailyData[day].max, item.main.temp);
        dailyData[day].min = Math.min(dailyData[day].min, item.main.temp);
    });

    Object.keys(dailyData).slice(0, 5).forEach(day => {
        const data = dailyData[day];
        const row = document.createElement('div');
        row.className = 'daily-row';
        row.innerHTML = `
            <span>${day}</span>
            <img src="https://openweathermap.org/img/wn/${data.icon}.png">
            <span>${Math.round(data.max)}° / ${Math.round(data.min)}°</span>
        `;
        dailyContainer.appendChild(row);
    });
}

// 4. Suggestions Logic
function updateSuggestions(temp, condition) {
    condition = condition.toLowerCase();
    
    // Outfit
    let outfit = "Comfortable casual wear.";
    if (temp < 10) outfit = "Heavy coat, scarf, and gloves.";
    else if (temp < 18) outfit = "Sweater or light jacket with jeans.";
    else if (temp >= 25) outfit = "Shorts and a t-shirt. Stay cool!";
    
    if (condition.includes('rain')) outfit += " Don't forget an umbrella ☂️";
    outfitText.innerText = outfit;

    // Activity
    let activity = "Great day for a walk.";
    if (condition.includes('rain') || condition.includes('storm')) activity = "Stay inside: Read a book or watch a movie 🍿";
    else if (temp > 28) activity = "Go swimming or find AC 🏊";
    else if (condition.includes('clear')) activity = "Perfect weather for outdoor sports or a picnic 🌳";
    
    activityText.innerText = activity;
}

function showError(msg) {
    errorMsg.innerText = msg;
    errorMsg.classList.remove('hidden');
    console.error(msg);
}