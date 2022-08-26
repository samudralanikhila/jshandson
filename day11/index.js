let studentRecords = [
    { name: 'John', id: 123, marks : 98 },
   {name: 'Baba', id: 101, marks : 23 },
   {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ] 

//  "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

console.log(studentRecords[0].name.toUpperCase());
console.log(studentRecords[1].name.toUpperCase());
console.log(studentRecords[2].name.toUpperCase());
console.log(studentRecords[3].name.toUpperCase());

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let niki = [];
for (let i = 0; i < studentRecords.length; i++ ){
    if(studentRecords[i].marks > 50){
        niki.push(Object.assign(studentRecords[i]));
    }
}
console.log(niki);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let niki1 = [];
for (let i = 0; i<studentRecords.length; i++){
    if(studentRecords[i].marks > 50 && studentRecords[i].id > 120){
        niki1.push(Object.assign(studentRecords[i]));
    }
}
console.log(niki1)

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum = 0; 
for (let i = 0 ; i<studentRecords.length ; i++){
        sum = sum + studentRecords[i].marks;
    }
console.log(sum);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let niki2 = [];
for(let  i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
    niki2.push(studentRecords[i].name);
    }
  }
  
console.log(niki2);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let total = 0;

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120) {
    total += studentRecords[i].marks;
  }
}

console.log(total);


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let grace = 0;

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks < 50) {
    grace += studentRecords[i].marks + 15;
  }
}

console.log(grace);


// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

function student(fname, class1, rollno){
    this.fname =fname;
    this.class1 =class1;
    this.roolno =rollno;
}
const newArr = [
    new student("nikhila", "btech", 1),
    new student("hima", "btech", 2),
    new student("koti", "btech", 3),
    new student("manisha", "degree", 4),
    new student("baby", "10th", 5),
    new student("siva", "10th", 6)
];

console.log(newArr);