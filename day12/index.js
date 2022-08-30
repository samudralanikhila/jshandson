 //1
//  function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
//1234

//2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//at firt console.log(count)  the out put is 1 becouse it was in the funcion of if codition

//second console.log the out put is 0


//3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

//4
function rectangle (length) {
  return function (width){
    return  width * length
  }
}

let rec =  rectangle (10);
console.log(rec(3));
//5
const outer = ()=>{
  let n = 0;
  inner = function(){
    return n++;
  } ;
  return inner;
}
const result = outer ();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
//out put -0 1 2 3

//6
// "Print Output

var a = 12;
(function () {
  alert(a);
})();


//7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


//8

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = "+outerArg + "\n" +
        "innerArg = " + innerArg +"\n"+
       "outerVar = " + outerVar + "\n"+
        "innerVar = "+ innerVar + "\n"+
        "globalVar =  "+ globalVar);
    
    })(456);
})(123);