class Greeting {
  sayGoodby() {
    console.log('Goodby');
  }
}
let greeting = new Greeting();
greeting.sayGoodby();

// Previus vertion
function Greeting2() {}

Greeting2.prototype = {
  sayGoodby: function () {
    console.log('SayGoodby');
  },
};
let greeting2 = new Greeting2();
greeting2.sayGoodby();
