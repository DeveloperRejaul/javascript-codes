class Man {
  constructor(name) {
    this.name = name;
  }
}

class Employe extends Man {
  constructor(name) {
    super(name);

    this.Positon = 'UnKnown';
  }
}

let employe = new Employe('Rejaul');
console.log(employe.name);
console.log(employe.Positon);
