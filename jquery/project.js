/* 
user name input dialog, ok and cancel
player 1 blue
player 2 red
 */
// const player1Name = prompt("Player1 Name, and you will be Blue");
// const player2Name = prompt("Player2 Name, and you will be Red");

/* 
click column
set color to the bottom of the current click column
check win situation: horizontally, vertically or diagonally 
switch player
 */
$(".board td").click(function () {
  alert(this.cellIndex);  // 0, 1, 2, 3, 4, 5, 6
  checkWin();
  switchPlayer();
});

let currentPlayer = 0;

function checkWin() {}

function switchPlayer() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
}
