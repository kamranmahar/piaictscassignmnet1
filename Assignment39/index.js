"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city, country) => {
    return `\"${city} , ${country}\"`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Multan", "Pakistan"));
console.log(city_country("New York", "USA"));
