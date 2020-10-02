// NOUGHTS AND CROSSES 
// RESET WHEN FINISHED 
// EXTRA - Scoreboard
// EXTRA - Best of 5 Option
// PLAYED ON A GRID OF 3 SQUARES X 3 SQUARES
// PLAYER ONE = X
// PLAYER TWO = O
// PLAYER ONE AND PLAYER TWO TAKE TURNS ADDING THEIR SYMBOL (X or O) INTO EMPTY SQUARES.
// FIRST PLAYER TO GET 3 OF THEIR SYMBOLS IN A ROW (UP, DOWN, ACROSS OR DIAGONALLY) WINS.
// IF ALL 9 SQUARES ARE FILLED, AND NO ROW IS FILLED BY THE SAME SYMBOL. ITS A DRAW.
let clicks = 0
const cells = document.querySelectorAll(".cell");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
document.getElementById("grid").addEventListener("click", function (event) {
    clicks = (clicks || 0) + 1;
    console.log(clicks);
});
let xMove = [];
let oMove = [];
cells.forEach (cell => {
  cell.addEventListener("click", (event) => {
      if ((event.target.innerHTML === ("")) && (clicks % 2 == 0)) {
          event.target.innerHTML = "X";
          xMove.push(Number(event.target.id));
      } else if ((event.target.innerHTML === ("")) && (clicks % 2 == 1)) {
          event.target.innerHTML = "O";
          oMove.push(Number(event.target.id));
      }
    for (let i = 0; i < winningCombos.length; i++) {
      let count = 0
      for (let j = 0; j < winningCombos[i].length; j++) { 
        if (xMove.includes(winningCombos[i][j])){
          count++
          if(count === 3){
          alert("x win");
          window.location.reload();
          }
        }
      }
    }
    for (let i = 0; i < winningCombos.length; i++) {
      let count = 0
      for (let j = 0; j < winningCombos[i].length; j++) { 
        if (oMove.includes(winningCombos[i][j])){
          count++
          if(count === 3){
          alert("o win"); 
          window.location.reload();
          }
        }
      }
    }
  });
 
})


  

  

