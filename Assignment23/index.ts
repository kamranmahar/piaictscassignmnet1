let numOne:number=10;
let numTwo:number=80;
let strOne="abc";
let strTwo="Abc";



console.log("numOne>numTwo "+ (numOne>numTwo?true:false));
console.log("numOne==10 "+(numOne==10?true:false));
console.log("numOne<=10 "+(numOne<=100?true:false));
console.log("numOne< 10 "+(numTwo<10?true:false));
console.log("numOne>= 10 "+(numTwo>=10?true:false));
console.log("numTwo> 10 "+(numTwo>10?true:false));
console.log("numTwo< numOne "+(numTwo>numOne  ||  (typeof numOne)== "number" ?true:false));
console.log("numTwo<numOne  &&  (typeof numOne)== 'number' "+(numTwo<numOne  &&  (typeof numOne) == "number" ?true:false));
console.log("numTwo< numOne "+(numTwo>numOne?true:false));
console.log("numTwo<numOne  &&  (typeof numOne)== 'number' "+(strOne!== strTwo &&  (typeof numOne) == "number" ?true:false));
console.log("numTwo<numOne  &&  (typeof numOne)== 'number' "+(strOne== strTwo &&  (typeof numOne) == "number" ?true:false));
console.log("numTwo<numOne  &&  (typeof numOne)== 'number' "+(strOne== strTwo ||  (typeof numOne) == "number" ?true:false));
console.log("numTwo<numOne  &&  (typeof numOne)== 'number' "+(strOne!== strTwo ||  (typeof numOne) == "number" ?true:false));
