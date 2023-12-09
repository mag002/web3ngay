// Day 6 - Array

// Intro to Array

// Whenever you find that your variable creation is being very redundant, then it's probably a good time

const kingdom1 = "Mercia";
const kingdom2 = "Wessex";
const kingdom3 = "Northumbria";
const kingdom4 = "East Anglia";

// Equivalent JavaScript code
let kingdoms = ["Mercia", "Wessex", "Northumbria", "East Anglia"];

// Additional information
// The variable does not store the array directly. It stores a reference that points to it. Each element is stored at an index, starting with 0.
// To access a value in the array, use square brackets (e.g., kingdoms[0]).
// If you log an array, it will show you the hash code representation of the reference.

console.log("Array:", kingdoms);
console.log("Accessing the first element:", kingdoms[0]);
