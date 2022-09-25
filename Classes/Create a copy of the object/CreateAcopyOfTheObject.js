class Shape {
  constructor(LineCount, name) {
    this.LineCount = LineCount;
    this.name = name;
  }

  toString() {
    return `${this.name},` + `Line count is ${this.LineCount}`;
  }
}

let squre = new Shape(4, 'Squre');

// Copy WithOut Methods
let clone1 = {...squre};

// Clone sees change to original
let clone2 = Object.create(squre);

squre.LineCount = 5;
squre.name = 'red squre';

console.log(squre.toString());
console.log(clone1.toString());
console.log(clone2.toString());
console.log('clone1.lineCount is', clone1.LineCount);
