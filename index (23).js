

// const arr = new Array(100);

let grades = [3,65,78,45,73]

// Fill the array with values
function gradingStudents(grades) {
    // Write your code here
   let arr1=[];
    
    for (let  i = 0; i < grades.length; i++)
    {
        let x = grades[i];
        
        let rem = x%5; 
        
        if (x>=38 && ((x+5)-rem)-x<3)
        {
            arr1.push((x+5)-rem);
            
        }
        else arr1.push(x)
    }
    return arr1;
}
let res=  gradingStudents(grades)
console.log (res)