type Point = {
    x: number, 
    y:number,
}

type D3Point = Point & {
    z: number
}

interface IPoint{
    x: number, 
    y:number,
}

interface I3DPoint extends IPoint{
    z: number;
}


const ce = (point: IPoint) => {
    const db: I3DPoint = point as I3DPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

type stringOrNumber = string | number

function print(coord: stringOrNumber){

}
interface Test{
    b: number;
}

interface Test{
    a: number;
}