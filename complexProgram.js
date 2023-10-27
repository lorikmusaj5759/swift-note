// Filename: complexProgram.js
// Description: A complex program that simulates a virtual ecosystem with multiple organisms and their interactions.

// Global variables
let organisms = [];
let time = 0;

// Organisms class
class Organism {
  constructor(name, type, lifespan) {
    this.name = name;
    this.type = type;
    this.lifespan = lifespan;
    this.age = 0;
  }

  getInfo() {
    console.log(`${this.name} - Type: ${this.type} | Lifespan: ${this.lifespan}`);
  }

  live() {
    this.age++;
    console.log(`${this.name} is living... (Age: ${this.age})`);
    if (this.age >= this.lifespan) {
      console.log(`${this.name} has reached the end of its lifespan.`);
      this.die();
    }
  }

  die() {
    console.log(`${this.name} has died.`);
  }
}

// Plant class
class Plant extends Organism {
  constructor(name, type, lifespan, height) {
    super(name, type, lifespan);
    this.height = height;
  }

  grow() {
    this.height += 1;
    console.log(`${this.name} is growing... (Height: ${this.height})`);
  }
}

// Animal class
class Animal extends Organism {
  constructor(name, type, lifespan, speed) {
    super(name, type, lifespan);
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} is moving at a speed of ${this.speed}.`);
  }
}

// Create organisms
const plant1 = new Plant("Oak", "Tree", 100, 10);
const plant2 = new Plant("Rose", "Flower", 50, 2);
const animal1 = new Animal("Tiger", "Mammal", 15, 50);
const animal2 = new Animal("Eagle", "Bird", 20, 80);

// Add organisms to ecosystem
organisms.push(plant1, plant2, animal1, animal2);

// Simulate ecosystem
while (time < 100) {
  console.log(`----- Time: ${time} -----`);
  organisms.forEach((organism) => {
    organism.live();
    if (organism instanceof Plant) {
      organism.grow();
    } else if (organism instanceof Animal) {
      organism.move();
    }
  });
  time++;
}