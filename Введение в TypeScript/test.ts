const a:number = 5;
let b: string = 'Hello';
let c = true;

// const d = a + c

const d: string[] = ['hello', 'world'];

let e: any = 3;
e = 'Hello';

function test(a: string): string | number{
    return ''
}

// function return void 
function test3(a: string): string | void{
    return;
}

const test2 = (a: number): number =>{
    return a*2;
}

// d = d.map((x: string) => x.toLowerCase())
// d = d.map((x) => x.toLowerCase())

function countCoord(coord: {lat: number, long?: number | undefined}){

}

function printInt(id: number | string){
    if(typeof id === 'number'){
        console.log(id.toString());
    }else if (typeof id === 'string'){
        id.toUpperCase();
    }
}


function getSum(a: number | number[]){
    if(Array.isArray(a)){

    }
}

const x: undefined = undefined;
const z: null = null;