"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let OrdinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < OrdinalNumber.length; i++) {
    if (OrdinalNumber[i] == 1) {
        console.log(OrdinalNumber[i] + "st");
    }
    else if (OrdinalNumber[i] == 2) {
        console.log(OrdinalNumber[i] + "nd");
    }
    else if (OrdinalNumber[i] == 3) {
        console.log(OrdinalNumber[i] + "rd");
    }
    else {
        console.log(OrdinalNumber[i] + "th");
    }
}
