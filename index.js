st = "hello"
let arr=[1,2,36,7];

reverse = (str)=>
  {
    let empty_arr=[];

    for (let i =str.length-1 ;i>=0;i--)
    {
      empty_arr.push(str[i]);
      
    }
    return empty_arr;
    
  }

let res1=reverse(st);
let res2=reverse(arr);

console.log(res1);
console.log(res2);
