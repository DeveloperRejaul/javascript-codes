
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// Adding Properties to Objects
Person.prototype.nationality = "English";

// Adding  Methods to Objects
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

// Call
const person =  new Person('rejaul', 'Karim', 22, "red")