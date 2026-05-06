
let arr=[34,56,33,24,22,2,5,4,86,53,4,6,0]

arr.sort((a, b) => a - b);
console.log(arr);

console.log(arr.find((val)=>val>20));
console.log (arr.findIndex((val)=>val===6));

console.log(arr.findLastIndex((val)=>val===6));
console.log(arr.filter((val)=>val>20));

console.log(arr.slice(7));


let str = "Hello World! Welcome to JavaScript.";
console.log(str.split(" "));
console.log(str.split("-"));

let data = [
  //Bracket Notation
  {
    name: "Amit Sharma",
    dob: "1995-03-12",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Engineer",
  },
  {
    name: "Priya Verma",
    dob: "1992-07-25",
    phone: "9123456780",
    city: "Indore",
    profession: "Doctor",
  },
  {
    name: "Rahul Singh",
    dob: "1988-11-05",
    phone: "9988776655",
    city: "Delhi",
    profession: "Teacher",
  },
  {
    name: "Neha Gupta",
    dob: "1998-01-19",
    phone: "9090909090",
    city: "Mumbai",
    profession: "Graphic Designer",
  },
  {
    name: "Karan Patel",
    dob: "1990-09-30",
    phone: "9012345678",
    city: "Ahmedabad",
    profession: "Business Analyst",
  },
];
data.forEach((element) => {
  console.log(element["name"]);
});
console.log(data);
console.log(data[1]["name"]);

let studentData = {
  name: "Neha Verma",
  dob: "1997-08-21",
  phone: "9011223344",
  city: "Pune",
  profession: "Marketing Manager",
};
console.log(Object.keys(studentData)); //Object.keys()
console.log(Object.values(studentData)); //Object.values
console.log(Object.entries(studentData)); //Object.entries



 