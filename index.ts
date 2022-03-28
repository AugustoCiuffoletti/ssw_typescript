In JavaScript
interface miaInterface() {
    this.f1;
    this.f2;
}
var A: miaInterface[];
for (var n = 0; n < 3 ; n++ ) {
    A[n] = {f1: "blob", f2: n}
}
console.log(A)