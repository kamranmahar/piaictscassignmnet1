"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let show_magicians = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
let make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
};
let magicians = ["Aalto, Simo", "Abbot, David", "Acer, David"];
let magiciansgreat = ["Aalto, Simo", "Abbot, David", "Acer, David"];
make_great(magiciansgreat);
show_magicians(magicians);
show_magicians(magiciansgreat);
