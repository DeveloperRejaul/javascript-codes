// Bind
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
let fullName = person.fullName.bind(member);



// Call
// 01
const _person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
_person.fullName.call(person1);
// 02
const person8 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person9 = {
  firstName:"John",
  lastName: "Doe"
}
person8.fullName.call(person9, "Oslo", "Norway");



// Apply
// 01
const __person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person3 = {
  firstName: "Mary",
  lastName: "Doe"
}
// This will return "Mary Doe":
__person.fullName.apply(person3);

// 02
const person4 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person5 = {
  firstName:"John",
  lastName: "Doe"
}
person4.fullName.apply(person5, ["Oslo", "Norway"]);

// 03
const person6 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person7 = {
  firstName:"John",
  lastName: "Doe"
}
person6.fullName.call(person7, "Oslo", "Norway");