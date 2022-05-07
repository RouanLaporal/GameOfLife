export class Games{
    board: Array<Array<number>>
    constructor(board: Array<Array<number>>){
        this.board = board
    }

    public step(){
        this.board = this.board.map((row, cellY) =>{
            return row.map((cell, cellX) => {
                let number_of_neigbours = 0
                for (let y = cellY - 1; y <= cellY + 1; y++){
                    for(let x = cellX - 1; x <= cellX + 1; x++){
                        if(y === cellY && x === cellX) continue
                        number_of_neigbours += (this.board?.[y]?.[x] || 0)
                    }
                }

                if(cell && [2, 3].includes(number_of_neigbours)) return 1

                if (!cell && number_of_neigbours === 3) return 1

                return 0
            })
        })
    }
}