/**
 * JavaScript ES5 Object Methods
*/ 


// 1.Managing Objects 
// Create object with an existing object as prototype
Object.create()

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)


// 2. Protecting Objects
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)


// 3. Changing a Property Value
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};
Object.defineProperty(person, "language", { value: "NO" });

// Changing Meta Data
writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable: true  // Property can be reconfigured

writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable: false // Property can be not reconfigured
Object.defineProperty(person, "language", { writable: false }); //This example makes language read-only:
Object.defineProperty(person, "language", { enumerable: false });//This example makes language not enumerable:


// Listing All Properties
// Listing Enumerable Properties
// Example for value
const person1 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person1, "language", {enumerable:false});
Object.getOwnPropertyNames(person1);  // Returns an array of properties

// Example for key
const person2 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person2, "language", {enumerable:false});
Object.keys(person2);  // Returns an array of enumerable properties



// Adding a Property
const person3 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};
Object.defineProperty(person3, "year", {value:"2008"});