// board factory
function createBoard () { 
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
}

// game factory
function createGame () {
    const board = createBoard();
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
}