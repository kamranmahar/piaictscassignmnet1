"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numOne = 15;
let numTwo = 30;
let strOne = "abc";
let strTwo = "Abc";
//Tests for equality and inequality with strings
console.log("strOne==strTwo " + (strOne == strTwo));
console.log("strOne!=strTwo " + (strOne != strTwo));
console.log("strOne!==strTwo " + (strOne !== strTwo));
//Tests using the lower case function
console.log("strOne==strTwo " + (strOne == strTwo.toLowerCase()));
console.log("strOne==strTwo " + (strOne !== strTwo.toLowerCase()));
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("numOne==numTwo " + (numOne == numTwo));
console.log("numOne!=numTwo " + (numOne != numTwo));
console.log("numTwo!=30 " + (numTwo != 30));
console.log("numTwo>30 " + (numTwo > 30));
console.log("numTwo>=30 " + (numTwo >= 30));
console.log("numOne<numTwo " + (numOne < numTwo));
console.log("numOne>numTwo " + (numOne > numTwo));
console.log("((numTwo!=30)||(numTwo>=30))" + ((numTwo != 30) || (numTwo >= 30)));
console.log("((numTwo!=30)&&(numTwo>=30))" + ((numTwo != 30) && (numTwo >= 30)));
console.log("((numTwo==30)&&(numTwo>=30))" + ((numTwo == 30) && (numTwo >= 30)));
let numList = [1, 2, 4, 7, 9];
let citiesList = ["Lahore", "Karachi", "Pesahwer", "Quetta", "Gilgit", "Muzzafar Abad"];
let result = citiesList.includes("Banana");
console.log(result);
result = citiesList.includes("Lahore");
console.log(result);
