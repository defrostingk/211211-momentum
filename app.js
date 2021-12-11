let age = parseInt(prompt("How old are you?"));

console.log(age, typeof age);
console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number.");
} else {
  console.log("Thank you for writing your age.");
}
