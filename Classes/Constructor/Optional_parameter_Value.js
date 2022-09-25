class Man {
  constructor(name = 'UnKnown', country = 'UnKnown') {
    this.name = name;
    this.country = country;
  }
}

let man1 = new Man('Rejaul');

console.log(man1.name);
console.log(man1.country);
