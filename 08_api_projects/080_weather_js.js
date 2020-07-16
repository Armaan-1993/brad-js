//initialising the class

const weather = new Weather("India", "Kochi");

const ui = new UI();

//Need to load this function to dom when the event listener calls the funtion

document.addEventListener("DOMContentLoaded", getWeather);

//to change the location
// weather.changeLocation("Russia", "Ukraine");

function getWeather() {
    weather
        .getWeather() //since getWeather is an async function, it returns a promise and hence it
        .then((result) => {
            ui.paint(result);
        }) //instead of consoling , we need to call ui.js to load a ui built for this.
        .catch((err) => console.log(err));
}
