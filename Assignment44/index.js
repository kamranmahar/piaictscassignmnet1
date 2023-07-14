"use strict";
//let items :["Egg","Bread","Kabab"];
Object.defineProperty(exports, "__esModule", { value: true });
let make_sandwich = (...items) => {
    for (let i = 0; i < items.length; i++) {
        console.log("item " + (i + 1) + " " + items[i]);
    }
};
make_sandwich("Egg", "Bread", "Kabab");
make_sandwich("Egg", "Bread", "Kabab", "Chicken Pieace");
