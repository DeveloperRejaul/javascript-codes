class Man {
  constructor() {
    this.name = 'Unknown';
  }
}

let man = new Man();

console.log(man.name);

// *** Previous Version ***

function Man1() {
  this.name = 'Unknown';
}

let man1 = new Man1();
console.log(man1.name);
