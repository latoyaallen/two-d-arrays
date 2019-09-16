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

export {
  returnInOrder,
  reverseOrder,
  orderByColumn,
}
