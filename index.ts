// In JavaScript con una classe
class miaClasse {
  f1;
  f2;
  constructor(a, b) {
    (this.f1 = a), (this.f2 = b);
  }
}
var A = [];
var n;
for (n = 0; n < 3; n++) {
  A[n] = new miaClasse('', n);
}
console.log(A);
