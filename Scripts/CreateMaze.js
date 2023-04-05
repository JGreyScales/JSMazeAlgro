function findNextMoves(currentPositionXY, unExplored, indexPosition = 0){
    // define all possible movement options
    possibleMovement = [
        [currentPositionXY[0] - 1, currentPositionXY[1]], [currentPositionXY[0] + 1, currentPositionXY[1]],
        [currentPositionXY[0], currentPositionXY[1] - 1], [currentPositionXY[0], currentPositionXY[1] + 1]
    ]

    // parse each option and validate that that location is not explored or outside the bounds
    possibleMovement.forEach(option => {
        if (unExplored[option[0]] === false || unExplored[option[0]] == null){
            indexPosition = possibleMovement.indexOf(option),
            possibleMovement.slice(indexPosition, 1)
        }
    });
    
    return possibleMovement
}

function mazeCreation(x){

    // Our maze will be 100x100 tiles
    let area = (50 * 50) - 1;

    // create empty 2d arrays
    let rows = [];
    let columns = [];
    for (i = 0; i < 51; i++){
        rows[i] = [];
        columns[i] = [];
    }

    // generate two random numbers between 0-100 floored with bitwise 0
    let currentPositionXY = [Math.random() * 100 | 0, Math.random() * 100 | 0]
    // 2d array with possible movement
    let unExplored = [];
    let possibleMovement = findNextMoves(currentPositionXY, unExplored)
    // generate a tile map of all unexplored tiles
    // r = row, c = column

    for ( r = 0; r < 51; r++){
        unExplored[r] = []
        for ( c = 0; c < 51; c++){
            unExplored[r][c] = []
            if (r != currentPositionXY[0] || c != currentPositionXY[1])
                {
                    unExplored[r][c] = true
                } else {
                    unExplored[r][c] = false
            }
        }
    }

    let path = [[currentPositionXY,0,0]]
    let currentPathID = 0
    let currentPathOrder = 0
    let temp = [currentPositionXY[0], currentPositionXY[1]]
    while (area > 0){
        console.log(path)

        // if there is a valid movement option to make
        if (possibleMovement.length > 0){
            choice = Math.random() * (possibleMovement.length) | 0
            temp = [possibleMovement[choice][0], possibleMovement[choice][1]]
            currentPositionXY = [temp[0], temp[1]]
            currentPathOrder += 1
            unExplored[currentPositionXY[0]][currentPositionXY[1]]= false
            path.push([currentPositionXY, currentPathID, currentPathOrder])
        } else {
            // begin backtrace and start new path
            currentPathID += 1
            continue
        }

        // create a function that logics this out to create less iteration and faster runtime
        possibleMovement = findNextMoves(currentPositionXY, unExplored)
        // redefine possible movement based on newely aquired move

        area--
        console.log(area)

    }
    ///(00)(00)(3[3])
    ///(00)(00)(2[2,3])
    ///(00)(xx)(1[2])
    ///(00)(1[1])(2[1])

}