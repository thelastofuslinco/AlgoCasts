// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const array = []
  for (let i = 0; i < n; i++) {
    array.push([]);
  }
  let count = 1;
  let start_column = 0;
  let end_column = n - 1;
  let start_row = 0;
  let end_row = n - 1;

  while (start_column <= end_column && start_row <= end_row) {
    // Top row
    for (let i = start_column; i <= end_column; i++) {
      array[start_row][i] = count;
      count++;
    }
    start_row++;

    // Right column
    for (let i = start_row; i <= end_row; i++) {
      array[i][end_column] = count;
      count++;
    }
    end_column--;

    // Bottom row
    for (let i = end_column; i >= start_column; i--) {
      array[end_row][i] = count;
      count++;
    }
    end_row--;

    // Left column
    for (let i = end_row; i >= start_row; i--) {
      array[i][start_column] = count;
      count++;
    }
    start_column++;
  }

  return array;
}

module.exports = matrix;
