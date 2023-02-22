//HACKERRANK MINI-MAX


// const arr = new Array(100);

let grades = [13, 5, 9, 10, 11, 1];

function miniMaxSum(arr) {
  // Write your code here

  let sortarr = arr.sort(compare)
  let min = sortarr[0];
  let max = sortarr[sortarr.length - 1]
  let total_sum;
  let temp = sortarr[0];

  function compare(a, b) {
    return a - b;

  }

  for (let i = 1; i < arr.length; i++) {
    temp = temp + arr[i];
    total_sum = temp;
  }
  console.log(total_sum - max, total_sum - min)
}
let res = miniMaxSum(grades)
console.log(res)