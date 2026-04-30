let n = -3;
if (n > 0) {
  console.log("Positive Integer");
} else {
  console.log("Negative Integer");
}

let age = 20;

if (age < 21) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

let c = 2;
if ((c %= 2)) {
  console.log("even");
} else {
  console.log("odd");
}

let marks = 85;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 70) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i); // only odd numbers will be printed
}

let data;
let name = "";
data = name || "N/A"; //short hand technique
console.log(data);

let choice = 1000;
switch (choice) {
  case 1: {
    console.log("tea");
    break; // break na lagane pr niche wali statement bhi print ho jati hai
  }
  case 2: {
    console.log("coffee");
    break;
  }
  case 3: {
    console.log("lassi");
    break;
  }
  default: {
    console.log("paani");
  }
}
