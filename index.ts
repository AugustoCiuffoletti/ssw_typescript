// In JavaScript con un prototipo
function miaInterface(a,b) {
  this.f1=a;
  this.f2=b;
}
var A = [];
for (var n = 0; n < 3 ; n++ ) {
  A[n] = new miaInterface("blob", n)
}
console.log(A)