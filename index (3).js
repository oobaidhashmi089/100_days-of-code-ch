


////HACKERANK TASK plus-Minus

arr1 = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) 
{
    // Write your code here
  //      [plus,minus,zero]
  let count =[0,0,0]
  
  for(var i = 0; i < arr.length ; i++)
   
  {
    //for plus
    if(arr[i]>0)
    {
      count[0]=count[0]+1
      
    }
      //for minus
    else if(arr[i]<0)
    {
      count[1]=count[1]+1
      
    }
      //for zeros
    else count[2]=count[2]+1
  }
 
  
count.forEach (num=> console.log((num/arr.length).toFixed(6)))
return
                    
}

let res1=plusMinus(arr1);
console.log(res1)



