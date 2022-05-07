export interface Cell{
    x:number
    y:number
}
export interface setGame extends Array<Cell>{}

export function setMatrix(cells : number = 500, limit = 500):Cell[]{
    for(let index = 0; index < cells; index ++){
        const x = Math.floor(Math.random() * (limit/6))
        const y = Math.floor(Math.random() * (limit/6))
    } 
    return new Array({x:0,y:0}) 
}