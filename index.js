// -------- Q1
let str = "123";
let num = Number(str); 
console.log("Q1:", num + 7); 

// ---------- Q2
function checkFalsy(value) {

  if (!value) {
    return "Invalid";
  }
  return "Valid";
}
console.log("Q2:", checkFalsy(0)); 

// ---------- Q3
console.log("Q3:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i); 
}

// ---------- Q4
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (n)) {
  return n % 2 === 0; 
console.log("Q4:", evenNumbers);
 }

// ---------- Q5
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]; 
}
console.log("Q5:", mergeArrays([1, 2, 3], [4, 5, 6])); 

// ---------- Q6
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log("Q6:", getDayName(2)); 

// ---------- Q7
let words = ["a", "ab", "abc"];
let lengths = words.map(function (word) ){
  return word.length; 
console.log("Q7:", lengths); 
// ---------- Q8
function checkDivisible(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Divisible by both";
  } else if (n % 3 === 0) {
    return "Divisible by 3 only";
  } else if (n % 5 === 0) {
    return "Divisible by 5 only";
  } else {
    return "Not divisible by 3 or 5";
  }
}
console.log("Q8:", checkDivisible(15)); 

// ---------- Q9:
const square = (n) => n * n;
console.log("Q9:", square(5));

// ---------- Q10:
function describePerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log("Q10:", describePerson(person));

// ---------- Q11:
function sumAll(...nums) {
 
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log("Q11:", sumAll(1, 2, 3, 4, 5)); 

// ---------- Q12
function waitThreeSeconds() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Success");
    }, 3000); 
  });
}
waitThreeSeconds().then(function (message) {
  console.log("Q12:", message); 
});

// ---------- Q13: 
function findLargest(arr) {
  let largest = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log("Q13:", findLargest([1, 3, 7, 2, 4])); 

// ---------- Q14
function getKeys(obj) {
  return Object.keys(obj);
}
console.log("Q14:", getKeys({ name: "John", age: 30 })); 

// ---------- Q15
function splitWords(sentence) {
  return sentence.split(" "); 
}
console.log("Q15:", splitWords("The quick brown fox")); 