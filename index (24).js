//HACKERRANK


// const arr = new Array(100);

let grades = [ -4,3,-9,0,4,1]

function plusMinus(arr) {
    // Write your code here
    let positive =0;
  let negative =0 ; 
  let zero =0;

  for(let i = 0 ; i< arr.length; i++)
  {
    if(arr[i]===0)
    {
      zero ++;}
    else if(arr[i]>0)
    {
      positive++
    }
    else negative++
  }
  let p =positive/arr.length.toFixed(5);
  let n= negative/arr.length.toFixed(5);
  let z=zero/arr.length.toFixed(5);
 console.log (p)
 console.log (n)
 console.log (z)


}
let res=  plusMinus(grades)
console.log (res)