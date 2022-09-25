class Shape {}
class Square extends Shape {}
class RedSqure extends Square {}

let square = new Square();
let isShape = square instanceof Shape;
isShape;

let isRedSqure = square instanceof RedSqure;
isRedSqure;
