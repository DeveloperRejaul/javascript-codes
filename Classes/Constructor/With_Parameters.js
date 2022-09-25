class Man {
  constructor(name) {
    this.name = name;
  }
}

let man = new Man('Rejaul');
console.log(man.name);

// *** Previous Version ***
function Man1(name) {
  this.name = name;
}
