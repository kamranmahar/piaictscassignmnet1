
let WorldPlaces=["China","India","America","France","Bratin"];
console.log(WorldPlaces);
let sorted=WorldPlaces.slice().sort((a, b) => a.localeCompare(b, "en", { ignorePunctuation: true }));
console.log(sorted);
console.log(WorldPlaces);
let reverse=WorldPlaces.slice().sort((a, b) => a.localeCompare(b, "en", { ignorePunctuation: true })).reverse();
console.log(reverse);
console.log(WorldPlaces);
reverse=WorldPlaces.slice().sort((a, b) => a.localeCompare(b, "en", { ignorePunctuation: true })).reverse().reverse();
console.log(reverse);

reverse=WorldPlaces.slice().sort((a, b) => a.localeCompare(b, "en", { ignorePunctuation: true })).reverse().reverse().reverse();
console.log(reverse);
WorldPlaces.sort();
console.log(WorldPlaces);
WorldPlaces.reverse();
console.log(WorldPlaces);