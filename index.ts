interface miaInterfaccia {
  f1: string;
  f2: number;
}
class miaClasse implements miaInterfaccia {
    f1: string;
    f2: number;
    sum: ((a:number,b:number) => number) = function(x,y) {return x+y};
    constructor( a: string, b: number ) {
        this.f1=a,
        this.f2=b
    }
};
var A: Array<miaInterfaccia> = [];
var n: number;
A[0] = {f1: "nome1",f2: 6};
A[1] = new miaClasse("nome2",12);
console.log(A)