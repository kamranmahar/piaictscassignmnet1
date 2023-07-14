let GuestList:String[];
let Message:string;
let rejectedRequest:string;
let replacedRequest:string;
Message=" I am Inviting you for Dinner ";
GuestList=["Kamran","Sultan","Imran","Akmal"];
for (let i = 0; i < GuestList.length; i++) {
     console.log(GuestList[i]+Message);
}
rejectedRequest="Imran";
replacedRequest="Ahmed"
console.log("\n"+rejectedRequest+" will not make to dinner today\n");
GuestList[GuestList.indexOf(rejectedRequest)]=replacedRequest;
//GuestList.splice(GuestList.indexOf(rejectedRequest),1) ;
for (let i = 0; i < GuestList.length; i++) {
     console.log(GuestList[i]+Message);
}