// Init Storage Object
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city);

// Init UI Object
const ui = new UI();

// Get Weqther on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    // const state = document.getElementById('state').value;


    weather.changeLocation(city);

    // Set Location in LS
    storage.setLocationData(city);

    // Get and Display Weather
    getWeather();

    // Close Modal
    $('#locModal').modal('hide');
});


// 

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err))
}