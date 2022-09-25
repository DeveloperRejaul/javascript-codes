/**
 * @Title : Three Arrays Sum  Matrix Style
 */

const arr1 = [
  [1, 2, 3],
  [3, 6, 8],
  [1, 5, 9],
];
const arr2 = [
  [1, 2, 3],
  [3, 6, 8],
  [1, 5, 9],
];
const arr3 = [
  [1, 2, 3],
  [3, 6, 8],
  [1, 5, 9],
];

function matrix(arr1, arr2, arr3) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j] + arr3[i][j]);
    }
    result.push(row);
  }
  return result;
}

const result = matrix(arr1, arr2, arr3);

// log
result;
