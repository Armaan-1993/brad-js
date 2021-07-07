//initialising the classes
const storage = new Storage();
//using varibles for country and name
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.country, weatherLocation.name);

const ui = new UI();

//Need to load this function to dom when the event listener calls the funtion

document.addEventListener("DOMContentLoaded", getWeather);

//event listener to change the location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const country = document.getElementById("city").value;
    const name = document.getElementById("state").value;
    //to change the location
    weather.changeLocation(country, name);
    //we need to call getWeather again

    //set local storage
    storage.setLocationData(country, name);
    getWeather();

    //j - query to close the modal
    $("locModal").modal("hide");
});

function getWeather() {
    weather
        .getWeather() //since getWeather is an async function, it returns a promise and hence it
        .then((result) => {
            ui.paint(result);
        }) //instead of consoling , we need to call ui.js to load a ui built for this.
        .catch((err) => console.log(err));
}
