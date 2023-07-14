"use strict";
var GuestList;
var Message;
var rejectedRequest;
Message = " I am Inviting you for Dinner ";
GuestList = ["Kamran", "Sultan", "Imran", "Akmel", "Ahmed"];
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + Message);
}
rejectedRequest = "Imran";
console.log("\n" + rejectedRequest + " will not make to dinner today\n");
GuestList.splice(GuestList.indexOf(rejectedRequest), 1);
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + Message);
}
console.log("\nI found a Bigger Dinner Table Invitations are Open\n");
GuestList.unshift("Adnan");
GuestList.splice(GuestList.length / 2 + 1, -1, "Asif");
GuestList.push("Habib");
for (var i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + Message);
}
console.log("I  have space for only two guests.");
console.log(GuestList.length);
let count = GuestList.length;
for (let i = 0; i < count - 2; i++) {
    GuestList.pop();
}
Message = "you are still Invited";
for (let i = 0; i < GuestList.length; i++) {
    console.log(GuestList[i] + Message);
}
for (let i = 0; i < GuestList.length + 1; i++) {
    GuestList.pop();
}
for (let i = 0; i < GuestList.length - 1; i++) {
    console.log(GuestList[i]);
}
console.log("Guest Invited " + (GuestList.length));
