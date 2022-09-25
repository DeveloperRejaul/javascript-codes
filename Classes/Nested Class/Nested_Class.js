function SomeClass() {
  this.create = function () {
    return new NestedClass();
  };
  function NestedClass() {}
}

let someClass = new SomeClass();
let nested = someClass.create();
