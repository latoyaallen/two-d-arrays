import {
  returnInOrder,
  reverseOrder,
  orderByColumn,
} from './twoDArray';

  const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
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

