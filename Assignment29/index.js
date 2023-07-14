"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["Banana", "Apple", "Oranges", "Mango"];
if (favorite_fruits[0] === "Banana") {
    console.log("You really like bananas!");
}
if (favorite_fruits[0] !== "Banana") {
    console.log("You dont really like bananas!");
}
if (favorite_fruits.indexOf("Banana") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("Pinaapples") === -1) {
    console.log("You dont really like Pinaapples!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (!favorite_fruits.includes("Banana")) {
    console.log("You really like bananas!");
}
