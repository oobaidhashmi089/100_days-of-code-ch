let apples=[2,3,-4] 
let oranges=[3,-2,-4] 
let a=4
let b=12
let s=7
let t=10
function countApplesAndOranges(s, t, a, b, apples, oranges) 
{
    // Write your code here
  let sumA = 0; 
  let sumo = 0;
  let o=0
  let ap=0
 
  for (let i=0 ; i<apples.length;i++)
  {
    let sumA= apples[i]+a;
      if(sumA >=s && sumA<=t)
    {
      ap =ap+1
      
    }
    
    
  }
  
    for (let i=0 ; i<oranges.length;i++)
  {
    let sumo= oranges[i]+b;
    if(sumo >=s && sumo<=t)
    {
      o =o+1
      
    }
    
    
  }
 console.log(ap)
 console.log(o)

}

let rs = countApplesAndOranges(s,t,a,b,apples,oranges)
// expected output =2  
console.log(rs)  //
