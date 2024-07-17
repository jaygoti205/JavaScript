console.log("Object Method:");

let animal = {
    name: "Lion",
    type: "Mammal",
    detail: function () {
        return this.name + " is a " + this.type + ".";
    }
};

console.log("Animal detail",animal.detail());

//keys() method
console.log("Keys of Animal Object: ", Object.keys(animal));

//values() method
console.log("Values of Animal Object: ", Object.values(animal));

//entries() method
console.log("Entries of Animal Object: ", Object.entries(animal));

//delete() method
delete animal.type;
console.log("Animal Type after deleting 'type' property:", animal.type); //undefined

//freeze() method
Object.freeze(animal);
animal.name = "Tiger"; // Trying to change property value but it is not allowed
console.log("Animal Name after freezing:", animal.name);//lion

//hasOwnProperty() method
console.log("Is 'name' a property of Animal Object? ", animal.hasOwnProperty("name"));

//assign() method
let city={
    name: "Surat",
    population: 2000000,
    note:"GOOD PLACE"
}
let village={
    name:"rajula",
    population: 100000
}
let place=Object.assign({number:1},city,village);

console.log("Place:",place);


