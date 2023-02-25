class CountFour {
  currentPlayer = 0;
  currentPlacedMap = new Map();
  // private placedMap: { [key: {number, number}]: string } = {};

  constructor(columnCount, rowCount) {
    this.resetGame(columnCount, rowCount);
  }

  getPlayerPlace(col) {
    this.currentPlacedMap.set(col, this.currentPlacedMap.get(col) - 1);
    // alert(this.currentPlacedMap.get(col));
    return { colIdex: col, rowIdex: this.currentPlacedMap.get(col) };
  }

  resetGame(columnCount, rowCount) {
    for (let i = 0; i < columnCount; i += 1) {
      this.currentPlacedMap.set(i, rowCount);
    }
    this.currentPlayer = 0;
  }

  checkWin() {
    // if anyone wins, resetGame
    // else, switch player
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
  }
}

const columnCount = $(".board tr:first td").length;
const rowCount = $(".board tr").length;
// alert(columnCount);
// alert(rowCount);

const countFour = new CountFour(columnCount, rowCount);

$(".board td").click(function () {
  // alert(this.cellIndex); // 0, 1, 2, 3, 4, 5, 6
  const position = countFour.getPlayerPlace(this.cellIndex);
  alert(`position: ${position.colIdex} ${position.rowIdex}`);
  countFour.checkWin();
});
