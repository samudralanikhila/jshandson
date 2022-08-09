// Create one function with zero parameter having a console statement;
// 1
console.log("java script is used for interfacing of html and css")

 // Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
// 2
let a=3
let b=4
sum= a+b
console.log(sum)

//  Create one arrow function
// 3 
const AddTwoNumbers = (a,b) => {
     return a+b;
 };
 console.log(AddTwoNumbers(4,5));

// 4
 var x = 21;
var girl = function () {
     console.log(x);
     var x = 20;
};
girl ();

//  5
 var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
  };

// 6
var x = 21;
// a();
// b();
// console.log(a);
//  a = function() {
    
//   x = 20;
//    console.log(x);
//   };
//  b = function() {
    
//      x = 40;
//     console.log(x);
//  };
 // refrence error

  // Write a function that accepts parameter n and returns factorial of n
  const n=5;
      let fact=1
        for(let i=1;i<=5;i++){
        fact*=i;
      }
      console.log(fact);