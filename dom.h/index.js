// que-1
const element = document.getElementById('text');
element.innerText = "Element created by using getElementsById"
console.log(element.innerText)
element.style.color='pink'
element.style.fontSize='50px'
element.style.fontStyle='italic';
element.style.textDecoration='underline'

const element1 = document.getElementsByTagName('h1')[2]
console.log(element1)
element1.style.fontSize='50px'
element1.innerText = 'Element created by using getElementsTagName' 
element1.style.color = 'blueviolet'
element1.style.textShadow = '5px 5px 5px pink'

const element2 = document.getElementsByClassName("box")[0]
console.log(element2)
element2.innerText = 'Element created by using getElementsByClassName' 
element2.style.color='red'
element2.style.backgroundColor ='black';
element2.style.textAlign = 'center'  
element2.style.padding = '20px'
element2.style.fontSize='50px'

// function niki(){
//     document.getElementById('n').innerText = 'hello world'
// }

const element3 = document.getElementById("n")
element3.style.fontSize = '75px'
element3.style.color='red'
function myFunction() {
    document.getElementById("n").innerHTML = "Hello World";
  }

function niki(){
    const element4 = document.getElementById("flex");
    element4.style.flexDirection = "column"
}

const red = document.getElementById('world');
     red.style.color='red';
     red.id = 'heading'
     red.style.fontSize = '75px'


 const button3 = document.
 getElementById('btn3');
 const replace = document.getElementById('replace1');
     button3.addEventListener('click',() => {
     const replace = document.getElementById('replace1');
     replace.innerText = '"Welcome to Elevation academy"';
     button3.innerText = 'Replaced'; 
    })
replace.style.fontSize = '50px'


let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss"); 
let time = document.getElementById("clock");


mm.style.fontSize = "25px"
hh.style.fontSize = "25px"
ss.style.fontSize = "25px"
ss.style.margin = "25px"
mm.style.margin = "25px"
hh.style.margin = "25px"
time.style.width= "250px"
time.style.border= "red solid 5px"
time.style.border= "red solid 5px"
time.style.padding= "25px"
time.style.justifyContent= "center"

function clock(){
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hh.innerText = hrs;
    mm.innerText = mins;
    ss.innerText = secs;
}
clock();
setInterval(clock,1000);


const displayYear = () => {
    let selectedYear = document.getElementById("year");
    let year = null;
    selectedYear.addEventListener("change", function handleChange(event) {
      year = selectedYear.options[selectedYear.selectedIndex].value;
    });
  
    let showYear = document.getElementById("showYear");
    showYear.addEventListener("click", function handleChange(event) {
      document.getElementById("displayYear").innerHTML = year;
    });
  };



  function foo(){
 
    //creating form-
    const form = document.createElement('form');
    form.setAttribute('method','get');
    form.setAttribute('action','submit');

    //creating input elements
    //for name-
    const name =document.createElement('input');
    name.setAttribute('name','fname');
    name.setAttribute('type','text');
    name.setAttribute('placeholder','Enter your full name');
    // name.setAttribute('required')
    

    //for phone number-
    const phone =document.createElement('input');
    phone.setAttribute('name','number');
    phone.setAttribute('type','number');
    phone.setAttribute('placeholder','Enter your phone number');
    phone.setAttribute('maxlength','14');
    phone.setAttribute('pattern','[+91][789]{1}[0-9]{9}');
    // name.setAttribute('required')

    //for Email-
    const email =document.createElement('input');
    email.setAttribute('name','email');
    email.setAttribute('type','email');
    email.setAttribute('placeholder','Enter your email');
    email.setAttribute('pattern','[a-zA-Z0-9\-\_\.]+@prepbyte.com');
    // name.setAttribute('required')

     //for DOB-
    const birth =document.createElement('input');
    birth.setAttribute('name','birth');
    birth.setAttribute('type','date');
    birth.setAttribute('placeholder','DD/MM/YYYY');
    birth.setAttribute('min','1995-01-01');
     // name.setAttribute('required')

     //submit button-
     const submit=document.createElement('button');
     submit.setAttribute('type','submit')
     submit.setAttribute('value','submit')
     submit.innerText ='submit';

     //add all child to form-
     form.appendChild(name);
     form.appendChild(phone);
     form.appendChild(email);
     form.appendChild(birth);
     form.appendChild(submit);

     //access div of id form-
     const div = document.getElementById('form');
     //add form to div-
     div.appendChild(form);
}
foo();