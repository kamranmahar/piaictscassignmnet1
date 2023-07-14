"use strict";
let GuestList;
let Message;
let rejectedRequest;
Message = " I am Inviting you for Dinner ";
GuestList = ["Kamran", "Sultan", "Imran", "Akmel", "Ahmed"];
console.log("\nI found a Bigger Dinner Table Invitations are Open\n");
GuestList.unshift("Adnan");
GuestList.splice(GuestList.length / 2 + 1, -1, "Asif");
GuestList.push("Habib");
for (let i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + Message);
}
