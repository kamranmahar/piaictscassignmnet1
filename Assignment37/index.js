"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size = "Large", message = "I love TypeScrip") => {
    console.log("T-Shirt with Size " + size + " with Print " + message);
};
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Developer");
