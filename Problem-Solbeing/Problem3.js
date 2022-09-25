/**
 * @Title : Tow value Sum in Array than Array Index
 */

function sumArr(arr, tergate) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == tergate) {
        return [i, j];
      }
    }
  }
  return false;
}

console.log(sumArr([4, 2, 45, 45, 64, 7], 10));
