class Weather {
    constructor(country, name) {
        this.apiKey = "fd86b47036a70a9229aca1f80b1779c0";
        this.country = country;
        this.name = name;
    }
    async getWeather() {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.country},${this.name}&appid=${this.apiKey}`
        );
        const responseData = await response.json();
        // console.log(responseData);
        return responseData;
    }
    //change weather location
    changeLocation(country, name) {
        this.country = country;
        this.name = name;
    }
}
