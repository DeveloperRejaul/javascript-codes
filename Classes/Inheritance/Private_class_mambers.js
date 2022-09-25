function Test() {
  var privateVar;
  // Only visible inside stast
  var privateFunc = function () {
    privateVar = ' I can set this here ';
  };

  // Publice is visible to all
  this.publicFunc = function () {
    privateFunc();
  };
}

var test = new Test();
test.publicFunc();
test.privateFunc();
