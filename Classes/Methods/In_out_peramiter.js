// In js you can't change param reference

class Swap {
  string(s1, s2) {
    let tmp = s1[0];
    s1[0] = s2[0];
    s2[0] = tmp;
  }
}

let s1 = ['A'];
let s2 = ['B'];

let swap = new Swap();
swap.string(s1, s2);

s1;
s2;
