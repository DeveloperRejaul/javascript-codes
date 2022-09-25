class Greeting {
  static sayGoodby(message = 'Goodby!') {
    console.log(message);
  }
  static sayHello(message = 'Hello') {
    console.log(message);
  }
}

Greeting.sayGoodby();
Greeting.sayHello('hi');

var id = document.getElementById('id');

console.log(id);
