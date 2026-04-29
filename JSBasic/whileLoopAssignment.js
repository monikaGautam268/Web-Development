// // 1. Write a program to print numbers from 1 to 5
// // using a while loop.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// // 2. Write a program to print numbers from 5 to 1
// // using a while loop.

let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// // 3. Write a program to print numbers starting
// // from 2 and keep adding 2 while the number
// // becomes less than 11.
let k = 2;
while (k < 11) {
  console.log(k);
  k += 2;
}
// // 4. Write a program to calculate the sum of
// // numbers from 10 to 5 using a while loop.
let l = 10;
let sum = 0;
while (l >= 5) {
  sum = sum + l;
  l--;
}
console.log(sum);
// // 5. Create a while loop and explain the role of
// // initialization, condition, and increment in it.

let p = 1; // Initialization
while (p <= 5) {
  // Condition
  console.log(p); // Work
  p++; // Increment
}

// // 6. Write a loop and trace its execution step-by
// // step (initialization → condition → work →
// // update → repeat).
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
}

// // 7. Create a loop where the condition is false at
// // the beginning and explain what happens.
let y = 10;
while (y < 5) {
  console.log(y);
  y++;
}

// // 8. Write a loop and explain what happens if the
// // variable is not updated inside the loop.

// let z = 1;
// while (z <= 3) {
//   console.log(z);
//   // missing z++ → loop never ends
// }

// // 9. Create a loop and explain when and why it
// // becomes an infinite loop.

// let a = 1;
// while (a > 0) {
//   console.log(a);
//   // no update → runs forever
// }

// // 10. Write a loop and explain how the condition
// // controls the stopping of the loop.
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}

// // 11. Create a loop and explain how changing
// // increment to decrement affects the
// // execution.
let c = 5;
while (c >= 1) {
  console.log(c);
  c--;
}

// // 12. Write a loop and explain how many times it
// // will run based on the condition.
let d = 1;
while (d <= 4) {
  console.log(d);
  d++;
}
