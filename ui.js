class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.state = document.getElementById('w-state');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.localtime = document.getElementById('w-localtime');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.state.textContent = weather.location.region;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_c} celsius / ${weather.current.temp_f} fahrenheit`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c} celsius / ${weather.current.feelslike_f} fahrenheit`;
        this.localtime.textContent = `Local-Time: ${weather.location.localtime}`;
        this.wind.textContent = `Wind in kph: ${weather.current.wind_kph}`;

    }
}