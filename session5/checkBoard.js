const board = [
    ["*","*","*","*","*","*"],
    ["*","*","R","*","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","*","K","*","*"],
    ["*","*","*","*","*","*"],
    ["*","*","*","*","*","*"],
];

function findPositions(board) {
    let rowR = -1, columnR = -1, rowK = -1, columnK = -1;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "R") {
                rowR = i;
                columnR = j;
            }
            if (board[i][j] === "K") {
                rowK = i;
                columnK = j;
            }
        }
        // If both R and K are found, end the loop early
        if (rowR !== -1 && rowK !== -1) break;
    }

    return { rowK, columnK, rowR, columnR };
}

console.log(findPositions(board));