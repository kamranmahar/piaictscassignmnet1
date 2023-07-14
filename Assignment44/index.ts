//let items :["Egg","Bread","Kabab"];

let make_sandwich=(...items:string[])=>{
        for (let i = 0; i < items.length; i++) {
               console.log("item "+(i+1)+" "+items [i]);
                   
        }
};

make_sandwich("Egg","Bread","Kabab");
make_sandwich("Egg","Bread","Kabab","Chicken Pieace");
