// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let parent = {
    name : 'niki',
    age : 25
}
let child = {
    place : 'nandigama',
    profession : 'student'
}

child._proto_ = parent;
console.log(child._proto_.age)

parent._proto_ = child;
console.log(parent._proto_.place)

// Write code to explain prototype chaining

const personClass = class{
    constructor(fname, lname, byear){
        this.fname =fname;
        this.lname=lname;
        this.byear=byear;
    }
    calculateAge(){
        console.log(`my name is ${this.fname} ${this.lname} and current age is ${2022 - this.byear} `)
    }
}

const niki =new personClass("niki","paru","1998");
console.log(niki);
niki.calculateAge();

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays



const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);


// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const personproto ={
    calculateage(){
        console.log(`my name is${this.fname} ${this.lname} and current age is ${2022 -thisb.year}` )
    },
    initialise(fname,lname,byear){
        this.fname = fname;
        this.lname = lname;
        this.byear =byear;
    }
}


const hima = Object.create(personproto);
console.log(hima);
hima.fName = "Jarvis";
hima.lName = "Stewart";
hima.bYear = 1994;
console.log(hima);
//jarvis.initialise("Jarvis","Stewart",1994);jarvis.calculateAge();



