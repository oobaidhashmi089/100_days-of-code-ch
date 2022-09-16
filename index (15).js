x1 = 0
v1 = 3
x2 = 4
v2 = 2


function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let kangaroo1 = 0
  let kangaroo2 = 0

  if (v1 <= v2) {
    return 'NO'
  }


  else {

    while (x1 > x2 && x1 < x2) {
      kangaroo1 = x1 + v1
      kangaroo2 = x2 + v2
    }
    if (kangaroo1 === kangaroo2) {
      return 'YES'
    }
    else
      return 'NO'
  }

}


let rs = kangaroo(x1, v1, x2, v2)
// expected output =2  
console.log(rs)  //