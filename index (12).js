
candels = [4, 2, 4, 1]

function birthdayCakeCandles(candles) {
  // Write your code here


  let max = candles[0]
  let can = 0

  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i]

    }

  }
  for (let j = 0; j < candles.length; j++) {
    if (max === candles[j]) {
      can++
    }
  }
  return can



}

let rs = birthdayCakeCandles(candels)
// expected output =2  
console.log(rs)  // output willbe 2 
