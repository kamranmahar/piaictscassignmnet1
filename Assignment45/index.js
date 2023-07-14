"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let print_object = (manufacturer, model, name_value) => {
    let car = {
        manufacturer: manufacturer,
        model: model,
        Feature_name: name_value.name,
        Feature_Value: name_value.value
    };
    return car;
};
let feature = { name: "color", value: "Red" };
let feature1 = { name: "Engin Type", value: "Electric" };
console.log(print_object("Toyota", "Fortuner", feature));
console.log(print_object("Honda", "Civic", feature1));
