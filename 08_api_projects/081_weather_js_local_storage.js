class Storage {
    constructor() {
        this.country;
        this.name;
        this.defualtCountry = "India";
        this.defaultName = "Kochi";
    }

    getLocationData() {
        if (localStorage.getItem === "null") {
            this.country = this.defualtCountry;
        } else {
            this.country = localStorage.getItem("country");
        }

        if (localStorage.getItem === "null") {
            this.name = this.defaultName;
        } else {
            this.name = localStorage.getItem("name");
        }
        return {
            country: this.country,
            name: this.name,
        };
    }

    setLocationData(country, name) {
        localStorage.setItem("country", country);
        localStorage.setItem("name", name);
    }
}
