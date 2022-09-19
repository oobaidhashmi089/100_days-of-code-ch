
// HackerRank problem Breaking records 



let scores = [12,24,10,24]

  function breakingRecords(scores) {
    // Write your code here
    
    let countMIN =0
    let countMAX =0
    let hScore = scores[0];
    let lscore = scores[0];
    
    
    for(let i =1 ;i<scores.length;i++)
    {
     
      
        if(scores[i] > hScore)
        {
          hScore = scores[i]  
          
          countMAX++
          
        }
        if (scores[i] < lscore)
        {
           lscore = scores[i] 
           
            countMIN ++
                   
        }
    }
  return [countMAX,countMIN]
  
}

let res1 = breakingRecords(scores) 

console.log(res1)

