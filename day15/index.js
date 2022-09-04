// Write one example explaining how you can write a callback function ?
const sayhi = (nameofFriend) => {
    console.log("hello",nameofFriend);
}
const greeting = (friend,callBackFunction) => {
    callBackFunction(friend);
}
greeting("niki",sayhi);


// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// const countingNumber = () => {
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() =>{
//                 console.log(3)
//                 setTimeout(() => {
//                     console.log(4)
//                     setTimeout(() => {
//                         console.log(5)
//                         setTimeout(() => {
//                             console.log(6)
//                             setTimeout(() => {
//                                 console.log(7)
//                             },7000);
//                         },6000);
//                     },5000);
//                 },4000);
//             },3000);
//         },2000);
//     },1000);
// }
// countingNumber()
// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
let promise = new Promise ((resolve,reject) => {
    resolve()
})
promise.then(() => {
    setTimeout(() => {
        console.log("1")
    },1000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("2")
    },2000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("3")
    },3000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("4")
    },4000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("5")
    },5000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("6")
    },6000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("7")
    },7000);
})
// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
let id = "yes";
const Argument = new Promise((resolve,reject) => {
    if(id=="yes"){
        resolve(id);
    }
    else{
        reject()
    }
})
Argument
.then((id)=>{
    console.log("promise Resolve",id);
})
.catch(() =>{
    console.log("promise Rejected")
})
.finally(() => {
    console.log("END")
})
// Create examples to explain callback function
const name1 = (nameofStudent) => {
    console.log("hi",nameofStudent);
}
const bubby = (student, callbackFunction) => {
    callbackFunction(student);
}
bubby("niki",name1)
// Create examples to explain callback hell function
function getEmployeeID1() {

    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            };
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

            setTimeout(() => {
                employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);
}
getEmployeeID1()
// Create examples to explain promises function
const getEmployeeID = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(id);
        reject("the data isn't formed")
    },2000);
})
getEmployeeID
.then((id) => {
    console.log("Array",id)
})
.catch((err) => {
    console.log("Error message", err)
})
.finally(() => {
    console.log("end")
})
// Create examples to explain async await function
const fn1 = () => {
    return "Iam function One"
}
const fn3 = () => {
    return "Iam function Three"
}
const fn2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Iam function Two")//in Promise we give resolve
        }, 3000);
    })
}
const callFns = async () =>{
    let res1 = fn1();
    console.log(res1);
    let res2 = await fn2();
    console.log(res2);
    let res3 =fn3();
    console.log(res3)
}
callFns()
// Create examples to explain promise.all function
const p1 = Promise.resolve("FASNA");
const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise")
    },1000)
})
const p3 = 22;
Promise.all([p1,p2,p3]).then(value => {
    console.log(value)
})