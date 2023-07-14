let Personname:string;
let sentance:string;
Personname="Kamran ahmed";
console.log("Hello "+ Personname.toLowerCase() +", would you like to learn some Python today?");
console.log("Hello "+ Personname.toUpperCase() +", would you like to learn some Python today?");
Personname = Personname.split(' ').map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ");
console.log("Hello "+ Personname +", would you like to learn some Python today?");