const id = Symbol("id");
const name = Symbol("name");

const symbolTest = {
  [name]: "Rejaul",
  [id]: 1,
  fnc: function () {
    console.log(this[id]);
    console.log(this[name]);
  },
};

// log
// symbolTest.fnc();

const obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(obj.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window { /* … */ } (or the global object)
// obj.c(); // prints 10, Object { /* … */ }
