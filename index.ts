class miaClasse {
    f1: string;
    f2: number;
    constructor( a: string, b: number ) {
        this.f1=a,
        this.f2=b
    }
};
var A: List<miaClasse> = []; // anche miaClasse[]
var n: number;
for (n = 0; n < 3 ; n++ ) {
    A[n] = new miaClasse("",n) ;
}
console.log(A)