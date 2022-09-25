// Defining Mathod
const person = {
email:'rejaul@gmailcom',
  fullName: function() {
    return 'rejaul'
  }
};

// Accessing Object Methods
person.fullName()
person.fullName //return function


// Adding  Method
person.age = function () {
    return 22
}

// Dleteing mathod
delete person.fullName



/**
 *    Bilding Mathod
*/

//  Object.values()
const myArray = Object.values(person);
myArray

// JSON.stringify()
let myString = JSON.stringify(person);


