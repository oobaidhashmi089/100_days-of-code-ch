
//// STRING ANAGRAM

str1='hello'
str2='lleoh'
function anagram(str1,str2) 
{
  string1= str1.split('')
  string2= str2.split('')

  sortString1=string1.sort().join('')
  sortString2=string2.sort().join('')

if (sortString1===sortString2)
{
  console.log('True Anagram')
}
  else console.log('Not Anagram')
  
 
                
}

let res1=anagram(str1,str2);
console.log(res1)



