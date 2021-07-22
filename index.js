/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {//1 by 1
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }//if its not less than 10 the food is not going to push so we don't really need an else here
}

Person.prototype.poop = function () {
  this.stomach = [];//set back to empty array to empty the stomach
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
}

const shanae = new Person("Shanae", 29);
const leo = new Person("Leo", 18);

shanae.eat("pizza");
shanae.eat("taco");
shanae.eat("sushi");
shanae.eat("pasta");
shanae.eat("sandwich");

console.log(shanae.stomach);

shanae.poop();

console.log(shanae.stomach);

console.log(shanae.toString());







/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  return this.tank += gallons;
}

const kia = new Car("Kia", 60);
kia.fill(10);
console.log(kia);

//

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`
}

const elijah = new Baby("Elijah", 6, "dinosaur")
elijah.play();
console.log(elijah.play())
console.log(elijah);

elijah.eat("pizza");
console.log(elijah.stomach);
elijah.poop();
console.log(elijah.stomach);
console.log(elijah.toString());


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. The first principle is window binding. When "this" is in the global scope it will return the window object. If none of the other rules apply "this" will default to the window. The window object is an error and we do not want this.
  2. The next principle is implicit binding. In this principle "this" refers to the object to the left of the dot when a function is called.
  3. The third principle of "this" is new binding. "this" refers to the newly created object that the constructor function creates. When we call the function we have to use the "new" keyword.
  4. The last principle is explicit binding. "this" is explicitly bound when we use .call or .apply to bind an object.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby
}