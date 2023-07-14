"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let describe_city = (city, country = "Pakistan") => {
    console.log(city + " is in " + country);
};
describe_city("Multan");
describe_city("Lahore");
describe_city("New York", "USA");
