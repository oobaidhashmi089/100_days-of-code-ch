// array should be in ascending order
let arr=[-4,1,2,4,7,9,36];

findSum = (str)=>
  {
    let left = 0;
    let right = str.length-1;

   while (left < right)
   {
     let sum = str[left]+str[right]

     if (sum===0)
     {
       return [str[left],str[right]];
     }
     else if(sum > 0)
     {
       right--;
     }
     else if (sum<0)  
     { 
       left ++
     }
     else console.log("not zero ");
   }
     
  }

let res2=findSum(arr);

console.log(res2);
