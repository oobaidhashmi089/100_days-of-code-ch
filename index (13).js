
s="07:05:45AM"
s1="07:05:45PM"

function timeConversion(s) 
{
    // Write your code here
  let  str="" ;

  if (s.substring(0,2)===("12")&& s.includes("AM"))
  {
    str='00'
    s = str+ s.substring(2,s.length);
  }


 if( s.includes("PM")&&(s.substring(0,2)!==("12")))
    {
     
      str = parseInt(s.substring(0,2),10)+12
      s = str+ s.substring(2,s.length);
      
     }
  
  return s.substring(0,s.length-2);
  
    
}

let rs = timeConversion(s)
// expected output =2  
console.log(rs)  // output willbe 2 
