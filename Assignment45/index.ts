type Feature = {
        [key: string]: string;
        name: string;
        value: string;
      };


type car={
        manufacturer:string;
        model :string;
        Feature_name:string;
        Feature_Value:String;
       
};

let print_object=(manufacturer:string,model :string,name_value:Feature)=>{
        let car={
                manufacturer:manufacturer,
                model :model,
                Feature_name:name_value.name,
                Feature_Value:name_value.value
        };
  
        return  car;
};
let feature:Feature  = {name:"color",value:"Red"}
let feature1:Feature  = {name:"Engin Type",value:"Electric"}

console.log(print_object("Toyota","Fortuner",feature));
console.log(print_object("Honda","Civic",feature1));
