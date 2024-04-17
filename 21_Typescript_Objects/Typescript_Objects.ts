 
 //Write a program that creates Objects containing these items.


interface parson {
    age : number,
    name : string,
    nationality : string,
    Student : Boolean
}

let parson :parson = {
    age : 22 ,
    name : 'Minhaj' ,
    nationality : 'Pakistan' ,
    Student : true 
}
// print parson
console.log(parson);
 

// Datatype of car object
interface car {
   maker : string
   color : string
   automatic : boolean
}
// car object
let car = {
    maker : 'toyota',
    colur : 'black',
    automatic : true
}

// print car
console.log(car);