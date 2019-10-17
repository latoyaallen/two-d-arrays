function returnInOrder(matrix) {
  const newArray = [];
  let count = 0;

  while(count < matrix.length) {
    matrix[count].forEach(function(num) {
      newArray.push(num);
    });
    count++;
  }
  return newArray
}

function reverseOrder(matrix) {
  const arr = []
  let count = 0;

  while(count < matrix.length) {
    matrix[count].forEach(function(num) {
      arr.push(num);
    });
    count++;
  }
  return arr.reverse();
}

function orderByColumn(matrix) {
  const columnOrder = [];
  let row = 0;
  let column = 0;

  while(column < matrix.length) {
    columnOrder.push(matrix[column][row]);
    column++;
  }

  column = 0;
  row = 1;

  while(column < matrix.length) {
    columnOrder.push(matrix[column][row]);
    column++;
  }

  column = 0;
  row = 2;

  while(column < matrix.length) {
    columnOrder.push(matrix[column][row]);
    column++;
  }

  return columnOrder;
}

function validMoves(board, row, column) {
  const valid = [];
  const currentSpace = board[row][column];
  if(row > 0) {
    const up = board[row - 1][column];
    if(up !== -1) {
      let first = row - 1;
      let second = column;
      valid.push([first, second]);
    }
  }
  const down = board[row + 1][column];
  if(down !== -1) {
    let first = row + 1;
    let second = column;
    valid.push([first, second]);
  }
  const left = board[row][column - 1];
  if(left !== -1) {
    let first = row;;
    let second = column - 1;
    valid.push([first, second]);
  }
  const right = board[row][column + 1];
  if(right) {
    if(right !== -1) {
      let first = row;;
      let second = column + 1;
      valid.push([first, second]);
    }
  }

  return valid;
}

function firstAndLastCoordinates() {
}

export {
  returnInOrder,
  reverseOrder,
  orderByColumn,
  validMoves,
  firstAndLastCoordinates,
}
