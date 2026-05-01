// function expression  //write function expression with const
const abc = function () { 
  console.log("hello world");
};
console.log(abc);  // callBack function

let a = 20,
  b = 30;
function sum(x, y) {
  let z = x + y;

  console.log(z);
}
sum(a, b); 

const arrowfunction=()=>{ //arrow function 
    console.log("this is arrow function");
}
arrowfunction();


const addarrow=(a,b)=> a+b; 
console.log(addarrow(10,20));

