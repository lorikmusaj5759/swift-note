/* 
   Filename: complex_code.js
   Content: Complex and elaborate JavaScript code
*/

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method to calculate the year of birth based on the age
  getYearOfBirth() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Create an array of Person objects
const people = [
  new Person("John", 30),
  new Person("Alice", 25),
  new Person("Bob", 40)
];

// Function to calculate the average age of people in the array
function calculateAverageAge() {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
  }
  return sum / people.length;
}

// Log the average age to the console
console.log("Average Age:", calculateAverageAge());

// Object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  price: 80000,
  
  // Method to calculate the total price with tax
  calculateTotalPrice() {
    const taxRate = 0.15;
    return this.price + (this.price * taxRate);
  }
};

// Log the total price of the car to the console
console.log("Total Price:", car.calculateTotalPrice());

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 10 random numbers between 1 and 100 and log them to the console
console.log("Random Numbers:");
for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber(1, 100));
}

// Function to find the maximum number in an array
function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Find the maximum number in an array and log it to the console
const numbers = [15, 8, 20, 45, 12, 32];
console.log("Max Number:", findMaxNumber(numbers));

// Object representing a shopping cart
const shoppingCart = {
  items: [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 15 }
  ],
  
  // Method to calculate the total price of all items in the shopping cart
  calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }
};

// Log the total price of all items in the shopping cart to the console
console.log("Shopping Cart Total:", shoppingCart.calculateTotalPrice());

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse a string and log it to the console
console.log("Reversed String:", reverseString("Hello World!"));

// Class representing a geometric shape
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class.");
    }
  }
  
  // Abstract method to calculate the area
  calculateArea() {
    throw new Error("Method 'calculateArea' must be implemented.");
  }
}

// Class representing a circle extending the Shape class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  // Method to calculate the area of the circle
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Create a circle object and calculate its area
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());

// Long complex code continues here...

// ...
// More complex code goes here...
// ...

console.log("Done.");