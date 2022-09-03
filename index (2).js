////HACKERANK TASK DIAGONAL DIFFERENCE
function diagonalDifference(arr) 
{
    //HACKERANK TASK DIAGONAL DIFFERENCE
    // Write your code here
    let left_diagonal_sum=0;
    let right_diagonal_sum=0;
    let diagonal_difference=0;
    
    for(var i = 0; i < arr.length ; i++)
    {
        for(var j = 0; j < arr.length ; j++)
        {
            //for left diagonal
            if(i==j)
            {
                left_diagonal_sum+= arr[i][j]
            }
            //for right diagonal 
            if(i+j===arr.lenght-1)
            {
                right_diagonal_sum+= arr[i][j]
            }
        }
    }
     diagonalDifference=left_diagonal_sum - right_diagonal_sum;
    
    return Math.abs(diagonalDifference);
}


