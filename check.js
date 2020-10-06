const checkWin = (winningCombos, movesArray)=>{
    for (let i = 0; i < winningCombos.length; i++) {
      let count = 0
      for (let j = 0; j < winningCombos[i].length; j++) { 
        if (movesArray.includes(winningCombos[i][j])){
          count++
          if(count === 3){
          return true
          }
        }
      }
    }
    return false
  }
  module.exports = checkWin;