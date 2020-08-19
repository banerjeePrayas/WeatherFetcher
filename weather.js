class Weather {
    constructor(city) {
        this.apiKey = '32d3537b749143f2b87160528201808';
        this.city = city;
        // this.state = state;
    }

    // Fetch Weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}
        `);

        const responseData = await response.json();

        return responseData;
    }

    // Change Weather Location
    changeLocation(city) {
        this.city = city;
    }
}