const arr = [5, 6, 7, 34, 'string1', 65, 78, 23, 07];

// Problems
//1. Search Max Number
//2.  Search Min Number
//3.  Search String
//4.  Create new array with out String
//5. Return a new array min to max searial with out string

function maxAndLoewrNumberCount(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  let arString = arr[0];
  let withOutStringArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Search Max Number
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }

    // Search Min Number
    if (minNum > arr[i]) {
      minNum = arr[i];
    }

    //Search String
    if (isNaN(arr[i])) {
      arString = arr[i];
    }

    //   Create new array with out String
    if (!isNaN(arr[i])) {
      withOutStringArr.push(arr[i]);
    }
  }

  // Return a new array min to max searial with out string
  const SortedArrWithOutString = [...withOutStringArr].sort((a, b) => a - b);

  maxNum;
  minNum;
  arString;
  withOutStringArr;
  SortedArrWithOutString;

  return SortedArrWithOutString;
}

console.log(maxAndLoewrNumberCount(arr));
