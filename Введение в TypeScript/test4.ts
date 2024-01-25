class Poin {
    private x!: number;
    readonly g!: number;
    y!: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // protected a() {}
    a(){}
}

const point = new Poin(0, 0);
console.log(point.y); // 0
// point.x = 1;

class DPoint extends Poin {
    y!: number;
    constructor(x: number, y: number, zw: number) {
        super(x, y);
        this.zw = zw;
    }
    a(name?: string){}
}

const pointD = new DPoint(1, 1, 1);


abstract class Test3{
    myMethod(){

    }
}

class Test4 extends Test3{
}
new Test4();

interface C{
    test: () => void
}

class D implements C{
    test(){
        
    }
}