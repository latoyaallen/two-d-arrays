import {
  returnInOrder,
  reverseOrder,
  orderByColumn,
  validMoves,
} from './twoDArray';

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

const board = [
  [0, 0, 0],
  [0, 4, 0],
  [0, -1, 0],
];

it('returns the numbers in order', () => {
  expect(returnInOrder(matrix)).toEqual([1,2,3,4,5,6,7,8,9]);
});

it('returns the numbers in reverse order', () => {
  expect(reverseOrder(matrix)).toEqual([9,8,7,6,5,4,3,2,1]);
});

it('returns the numbers in column order', () => {
  // rows go left to right
  // columns for up and down, starting at the top
  expect(orderByColumn(matrix)).toEqual([1,4,7,2,5,8,3,6,9]);
});

it('returns all valid moves as row, column. It can move up, down, left, or right of the given space', () => {
  const row = 1;
  const column = 1;
  expect(validMoves(board, row, column)).toEqual([[0,1],[1,0],[1,2]]);
});
