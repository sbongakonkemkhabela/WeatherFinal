# 🌤️ Weather Dashboard

A modern, minimalistic weather dashboard application that provides real-time weather information and forecasts for any location worldwide. Built with vanilla JavaScript, CSS, and the OpenWeatherMap API.

![Weather Dashboard](<img width="1875" height="911" alt="image" src="https://github.com/user-attachments/assets/a30f7a9d-7cee-418e-8c8e-c1d371c4d039" />
)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)

## ✨ Features

### Core Features
- 🔍 **Real-Time Weather Search** - Search weather for any city worldwide
- 📍 **Geolocation Support** - Automatically detect and display weather for your current location
- 📅 **5-Day Forecast** - View upcoming weather predictions
- ⏰ **Hourly Forecast** - See weather changes throughout the day
- 🌡️ **Temperature Units** - Toggle between Celsius and Fahrenheit
- 💾 **Local Storage** - Remembers your last searched city

### Weather Information Displayed
- Current temperature and "feels like" temperature
- Weather condition with animated icons
- Humidity and atmospheric pressure
- Wind speed and direction
- Visibility distance
- UV Index with color-coded severity levels
- Sunrise and sunset times
- Cloud coverage percentage

### Dynamic UI
- 🎨 **Weather-Based Backgrounds** - Background changes based on weather conditions:
  - ☀️ Sunny: Warm orange gradient
  - ☁️ Cloudy: Cool blue gradient
  - 🌧️ Rainy: Grey gradient
  - 🌙 Night: Dark navy gradient
  - ❄️ Snow: Light grey gradient
  - 🌫️ Mist/Fog: Soft grey gradient

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Fade-in effects and transitions
- 🎯 **Loading States** - Visual feedback during API calls
- ❌ **Error Handling** - User-friendly error messages

## 🚀 Demo

[Live Demo](#) *(https://sparkling-youtiao-230ad5.netlify.app/)*

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](<img width="1875" height="911" alt="Screenshot 2025-12-04 002542" src="https://github.com/user-attachments/assets/822b7e0d-db74-4ff9-bb13-d20749dc5952" />

)

### Mobile View
![Mobile Screenshot](https://github.com/user-attachments/assets/dd533aab-11e4-48b6-b977-0d5851a75575)
)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Vanilla JavaScript for all functionality
- **OpenWeatherMap API** - Weather data provider
- **LocalStorage API** - Persistent data storage
- **Geolocation API** - Browser location detection

## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)
- A text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

### 2. Get Your API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Generate a new API key
5. Copy the API key

### 3. Configure the Application
Open `script.js` and replace the placeholder with your API key:

```javascript
const API_KEY = 'b9321491898579f281bd4b9d22a6fcf3'; 
```

### 4. Run the Application
Simply open `index.html` in your web browser:

```bash
# Option 1: Direct file open
open index.html

# Option 2: Using a local server (recommended)
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

Visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
weather-dashboard/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── LICENSE             # MIT License
├── SECURITY.md         # Security policy
├── CONTRIBUTING.md     # Contribution guidelines
├── CODE_OF_CONDUCT.md  # Code of conduct
│
├── screenshots/        # Application screenshots
│   ├── desktop.png
│   └── mobile.png
│
└── .gitignore         # Git ignore file
```

## 🎯 Usage Guide

### Search by City Name
1. Enter a city name in the search input (e.g., "London", "New York", "Tokyo")
2. Click the "🔍 Search" button or press Enter
3. View real-time weather data and forecasts

### Use Your Current Location
1. Click the "📍 My Location" button
2. Allow location access when prompted by your browser
3. Weather data for your current location will be displayed

### Toggle Temperature Units
1. Click on "°C (Celsius)" or "°F (Fahrenheit)" buttons
2. All temperature values will update accordingly

## 🔌 API Reference

This application uses the OpenWeatherMap API:

### Endpoints Used
- **Current Weather**: `/weather`
- **5-Day Forecast**: `/forecast`
- **UV Index**: `/uvi` (optional)

### API Limits (Free Tier)
- 60 calls/minute
- 1,000,000 calls/month
- Current weather data
- 5-day / 3-hour forecast

For more information, visit the [OpenWeatherMap API Documentation](https://openweathermap.org/api).

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |
| Opera   | ✅ Latest 2 versions |

## 🐛 Known Issues

- UV Index endpoint may not be available on the free API tier
- Some cities with special characters may require specific encoding
- Geolocation may not work on non-HTTPS sites

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Weather alerts and notifications
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Weather radar maps
- [ ] Historical weather data
- [ ] Save multiple favorite locations
- [ ] Air quality index (AQI)
- [ ] Weather charts and graphs
- [ ] Export weather data

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

Please review our [Security Policy](SECURITY.md) for information on reporting vulnerabilities.

## 👥 Authors

- **Your Name** - *Initial work* - [Sbongakonke Mkhabela](https://github.com/sbongakonkemkhabela)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Weather icons from OpenWeatherMap
- Inspired by modern weather applications
- Thanks to all contributors

## 📞 Support

For support, mkhabelafefe@gmail.com or open an issue in the GitHub repository.

## 📊 Project Status

Project is: **Active Development** 🚀

---

Made with ❤️ by [Sbongakonke Mkhabela]


**Star ⭐ this repository if you found it helpful!**

