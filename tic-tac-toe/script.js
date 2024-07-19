// board factory
const board = (function () { 
    let movesDone = 0;
    const board = [['', '', ''], ['', '', ''], ['', '', '']];

    // place chosen symbol on the board
    const makeMove = (symbol, row, col) => {
        if (movesDone == 9 || board[row - 1][col - 1] != '') {
            return null;
        }
        board[row - 1][col - 1] = symbol;
        movesDone += 1
        return board;
    };

    // check for row-based win condition
    const checkHorizontalWin = () => {
        for (i = 0; i < 3; i ++) {
            const symbol = board[i][0];
            if (symbol != '' && symbol === board[i][1] && symbol === board[i][2]){
                return symbol;
            }
        }
        return null;
    }

    // check for column-based win condition
    const checkVerticalWin = () => {
        for (j = 0; j < 3; j ++) {
            const symbol = board[0][j];
            if (symbol != '' && symbol === board[1][j] && symbol === board[2][j]) {
                return symbol;
            }
        }
        return null;
    }

    // check for diagonal win condition
    const checkDiagonalWin = () => {
        const symbol = board[1][1];
        if (symbol != '' && (symbol === board[0][0] && symbol === board[2][2]) || (symbol === board[0][2] && symbol === board[2][0])) {
            return symbol;
        }
        return null;
    }

    // check for any win condition or tie
    const checkWin = () => {
        const horizontal = checkHorizontalWin();
        const vertical = checkVerticalWin();
        const diagonal = checkDiagonalWin();
        const tie = (movesDone == 9)? 'T' : null;

        return horizontal || vertical || diagonal || tie;
    }

    // string representation of board
    const toString = () => {
        let res = "";
        for (i = 0; i < 3; i ++) {
            res += '[ ';
            for (j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    res += '.';
                }
                res += board[i][j] + " ";
            }
            res += ']\n';
        }
        return res;
    }

    const getMovesDone = () => movesDone;

    return { board, makeMove, getMovesDone, checkWin, toString};
})();

// game factory
const game = (function () {
    let currPlayer = 'X';

    const getCurrPlayer = () => currPlayer;

    // let current player make move, toggle player, then check for win or tie
    const makeTurn = (row, col) => {
        const moveStatus = board.makeMove(currPlayer, row, col);
        if (moveStatus == null) {
            return '';
        }
        if (currPlayer == 'X') {
            currPlayer = 'O';
        }
        else {
            currPlayer = 'X';
        }
        return board.checkWin();
    };

    const boardAsString = () => board.toString();

    return { board, getCurrPlayer, makeTurn, boardAsString };
})();

const displayController = (function () {
    let active = true;
    const boardDiv = document.getElementById("board");

    const editSlot = (symbol, row, col) => {
        const slot = document.getElementById('r' + row + 'c' + col);
        slot.textContent = symbol;
    }

    const endGame = (symbol) => {
        const endText = document.getElementById("end-text");
        if (symbol == 'T') {
            endText.textContent = "tie!";
        }
        else {
            endText.textContent = symbol + " wins!";
        }
        endText.style.display = "block";
    }

    for (i = 1; i <= 3; i ++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (j = 1; j <= 3; j ++) {
            const slot = document.createElement("div");
            slot.classList.add("slot");
            slot.id = 'r' + i + 'c' + j;
            rowDiv.appendChild(slot);

            slot.addEventListener("click", () => {
                if (active && slot.textContent == '') {
                    const r = slot.id[1];
                    const c = slot.id[3];
                    editSlot(game.getCurrPlayer(), r, c);
                    const response = game.makeTurn(r, c);
                    if (response) {
                        endGame(response);
                        active = false;
                    }
                }
            });
        }
        boardDiv.appendChild(rowDiv);
    }

    return { editSlot };
})();