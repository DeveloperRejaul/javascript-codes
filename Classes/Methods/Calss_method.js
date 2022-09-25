// ECMAscript 6
class Calc {
  static getMin(...values) {
    if (values.length === 0) return 0;
    let min = values[0];
    for (let i in values) {
      if (values[i] < min) min = values[i];
    }
    return min;
  }
}

let min = Calc.getMin(8, 7, 9, 2);
min;

//previous version
function OldCalc() {}
OldCalc.getMin2 = function (values) {
  if (values.length === 0) return 0;
  var min = values[0];
  for (var i in values) {
    if (values.hasOwnProperty(i)) {
      if (values[i] < min) min = values[i];
    }
  }
  return min;
};

var OldMin = OldCalc.getMin2([8, 7, 9, 2]);
OldMin;
