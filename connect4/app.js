const ROWS = 6;
const COLUMNS = 7;

let playerTurn = 1

let gameOver = false;

const player1 = {
    number: 1,
    color: "red",
    wins: 0
};

const player2 = {
    number: 2,
    color: "yellow",
    wins: 0
};

const boardContainer = document.querySelector("#board");
let board = [
    // 0 index is bottom, 5 index is top
    [0,0,0,0,0,0], // column 0
    [0,0,0,0,0,0], // column 1
    [0,0,0,0,0,0], // column 2
    [0,0,0,0,0,0], // column 3
    [0,0,0,0,0,0], // column 4
    [0,0,0,0,0,0], // column 5
    [0,0,0,0,0,0]  // column 6
];

for (let col = 0; col < COLUMNS; col++){


    // console.log("Column Created")
    
    const columnDiv = document.createElement("div");
    columnDiv.className = "column";
    columnDiv.id = `column-${col}`;
    columnDiv.addEventListener("click", () => {
        dropPiece(col);
    });


    for (let row = 0; row < ROWS; row++){
        // console.log("Row Created")
        const item = document.createElement("div");
        item.className = "item"
        item.id = `c${col}r${row}`;
        columnDiv.appendChild(item)
    }

    boardContainer.appendChild(columnDiv)
    
}

function checkWin(playerTurn){
    // console.log("CHECK WIN CALLED")
    //Horizontal Check
    for (let col = 0; col < COLUMNS; col++){
        let counter = 0;
        
        for (let row = 0; row < ROWS; row++){
            if(board[col][row] === playerTurn){
                counter++;
                if (counter === 4){
                    console.log("Vertical win")
                    return(true)
                }
            }
            else{
                counter = 0;
            }
        }
    }

    //Vertical Check
    for (let row = 0; row < ROWS; row++){
        let counter = 0;
        
        for (let col = 0; col < COLUMNS; col++){
            if(board[col][row] === playerTurn){
                counter++;
                if (counter === 4){
                    console.log("Horizontal win")
                    return(true)
                }
            }
            else{
                counter = 0;
            }
        }
    }

    //Diaganal Check (both bottom left to top right and top left to bottom right)
    for (let col = 0; col < COLUMNS - 3; col++) {
        for (let row = 0; row < ROWS - 3; row++) {

            if (board[col][row] === playerTurn && board[col + 1][row + 1] === playerTurn && board[col + 2][row + 2] === playerTurn && board[col + 3][row + 3] === playerTurn){
                console.log("Diagonal win!");
                return true;
            }

        }
    }
    for (let col = 0; col < COLUMNS - 3; col++) {
    for (let row = 3; row < ROWS; row++) {

        if (board[col][row] === playerTurn && board[col + 1][row - 1] === playerTurn && board[col + 2][row - 2] === playerTurn && board[col + 3][row - 3] === playerTurn){
            console.log("Diagonal win!");
            return true;
        }

    }
}

}

function updateTurnDisplay() {
    const player1Turn = document.getElementById("player1-turn");
    const player2Turn = document.getElementById("player2-turn");

    if (playerTurn === 1) {
        player1Turn.style.color = "white";
        player2Turn.style.color = "black";
    } else {
        player1Turn.style.color = "black";
        player2Turn.style.color = "white";
    }
}


function dropPiece(col){
    // console.log("player turn activated!", col)
    // console.log(board[col]);
    // console.log(board);
    if (gameOver) {
        return;
    }
    for (let row = 0; row < ROWS; row++){
        if (board[col][row] === 0){
            //Player 1 turn
            if (playerTurn == 1){
                console.log("PLAYER 1 TURN");
                board[col][row] = 1;
                const pieceLocation = document.getElementById(`c${col}r${row}`);
                pieceLocation.style.backgroundColor = "red";
                if (checkWin(playerTurn)) {
                    gameEnd(playerTurn);
                    return;
                }
                playerTurn = 2;
                document.getElementById("status").textContent = "Player 2's Turn";
                updateTurnDisplay();
                return row;
            }
            //Player 2 turn
            if (playerTurn == 2){
                console.log("PLAYER 2 TURN");
                board[col][row] = 2;
                let pieceLocation = document.getElementById(`c${col}r${row}`);
                pieceLocation.style.backgroundColor = "yellow";
                if (checkWin(playerTurn)) {
                    gameEnd(playerTurn);
                    return;
                }
                playerTurn = 1;
                document.getElementById("status").textContent = "Player 1's Turn";
                updateTurnDisplay();
                return row;
            }
        }
    }
}


function gameEnd(winner){
    gameOver = true;

    if (winner === player1.number) {
    player1.wins++;
    document.getElementById("player1-wins").textContent =
        `Wins: ${player1.wins}`;
    }
    else {
        player2.wins++;
        document.getElementById("player2-wins").textContent =
            `Wins: ${player2.wins}`;
    }

    document.getElementById("status").textContent =
        `Player ${winner} wins! Click Reset.`;
}

document.getElementById("restart").addEventListener("click", resetBoard);
function resetBoard(){
    gameOver = false;
    playerTurn = 1;

    board.forEach((column, col) => {
        column.forEach((cell, row) => {
            column[row] = 0;

            const piece = document.getElementById(`c${col}r${row}`);
            piece.style.backgroundColor = "black";
        });
    });

    document.getElementById("status").textContent = "Player 1's Turn";

    updateTurnDisplay();
}

updateTurnDisplay();

// boardContainer.innerHTML += '<h1>TEST</h1>'
console.log(board);
// board[0][2] = 1
// console.log(board)