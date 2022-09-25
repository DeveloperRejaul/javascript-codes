class Man {
  constructor(name) {
    this.name = name;
  }
}

class Employe extends Man {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
}

let employe = new Employe('Rejaul', 'Community Mobilizer');

console.log(employe.name);
console.log(employe.position);

// *** Previos version ***
function Man1(name) {
  this.name = name;
}

function Employe1(name, position) {
  Man1.apply(this, arguments);
  this.position = position;
}

let Employe2 = new Employe1('Rejaul', 'Community Mobilizer');

console.log(Employe2.name);
console.log(Employe2.position);
