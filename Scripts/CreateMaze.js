function findNextMoves(currentPositionXY, indexPosition = 0){

    possibleMovement = [
        [currentPositionXY[0] - 1, 0], [currentPositionXY[0] + 1, 0]
        [currentPositionXY[1] - 1, 0], [currentPositionXY[1] + 1, 1]
    ]

    possibleMovement.forEach(option => {
        if (unExplored[choice[0]] === false || unExplored[choice[0]] == null){
            indexPosition = possibleMovement.indexOf(choice)
            possibleMovement.slice(indexPosition, 1)
        }
    });
    
    return possibleMovement
}

function mazeCreation(){

    // Our maze will be 100x100 tiles
    let area = 1//9999;

    // create empty 2d arrays
    let rows = [];
    let columns = [];
    for (i = 0; i < 101; i++){
        rows[i] = [];
        columns[i] = [];
    }

    // generate two random numbers between 0-100 floored with bitwise 0
    let currentPositionXY = [Math.random() * 100 | 0, Math.random() * 100 | 0]
    // 2d array with possible movement
    let possibleMovement = [
        [currentPositionXY[0] - 1, 0], [currentPositionXY[0] + 1, 0]
        [currentPositionXY[1] - 1, 0], [currentPositionXY[1] + 1, 1]
    ]
    // generate a tile map of all unexplored tiles
    // r = row, c = column
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

    let path = [[currentPositionXY,0,0]]
    let currentPathID = 0
    let currentPathOrder = 0
    let temp = [currentPositionXY[0], currentPositionXY[1]]
    while (area > 0){
        choice = Math.random() * (possibleMovement.length + 1) | 0
        if (possibleMovement[choice][1] === 1){ 
            temp[1] = possibleMovement[choice][0]
        } else {
            temp[0] = possibleMovement[choice][0]
        }
        // if valid location and not already explored
        if (!(temp == null) && unExplored[temp[0]][temp[1]] === true){
           currentPositionXY = [temp[0], temp[1]]
           currentPathOrder += 1
           unExplored[currentPositionXY[0]][currentPositionXY[1]] = false
           path.push([currentPositionXY, currentPathID, currentPathOrder])

        } else {
            // begin backtrace and start new path
            currentPathID += 1
            return
        }


        // create a function that logics this out to create less iteration and faster runtime
        possibleMovement = findNextMoves(currentPositionXY)

         // redefine possible movement based on newely aquired move
         
        area =- 1
    }
    ///(00)(00)(3[3])
    ///(00)(00)(2[2,3])
    ///(00)(xx)(1[2])
    ///(00)(1[1])(2[1])



}