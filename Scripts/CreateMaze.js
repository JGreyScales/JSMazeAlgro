function mazeCreation(){
    // Our maze will be 100x100 tiles
    let area = 9999;

    // create empty 2d arrays
    let rows = [];
    let columns = [];
    for (i = 0; i < 101; i++){
        rows[i] = [];
        columns[i] = [];
    }

    // generate two random numbers between 0-100 floored with bitwise 0
    let currentPositionXY = [Math.random() * 100 | 0, Math.random() * 100 | 0]

    // generate a tile map of all unexplored tiles
    let unExplored = [];
    for ( r = 0; r < 101; r++){
        unExplored[r] = []
        for ( c = 0; c < 101; c++){
            unExplored[r][c] = []
            if (r != currentPositionXY[0] || c != currentPositionXY[1])
                {
                    unExplored[r][c] = true
                } else {
                    unExplored[r][c] = false
            }
        }
    }
    console.log(currentPositionXY)
    console.log(unExplored)
}