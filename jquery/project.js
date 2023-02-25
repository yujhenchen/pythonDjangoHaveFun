class CountFour {
  currentPlayer = 0;
  currentPlacedMap = new Map();
  colorMap = new Map();
  // private placedMap: { [key: {number, number}]: string } = {};

  constructor(columnCount, rowCount) {
    this.resetGame(columnCount, rowCount);
    this.initColorMap();
  }

  initColorMap() {
    this.colorMap.set(0, "yellow");
    this.colorMap.set(1, "blue");
  }

  getPlayerPlace(col) {
    this.currentPlacedMap.set(col, this.currentPlacedMap.get(col) - 1);
    // alert(this.currentPlacedMap.get(col));
    this.switchPlayer();
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
  // alert(`position: ${position.colIdex} ${position.rowIdex}`);

  // place
  const td = $(".board tr")
    .eq(position.rowIdex)
    .find("td")
    .eq(position.colIdex);

  const button = td.find("button");

  // alert(countFour.currentPlayer);
  // alert(countFour.colorMap.get(countFour.currentPlayer));
  button.css(
    "background-color",
    countFour.colorMap.get(countFour.currentPlayer)
  );

  countFour.checkWin();
});
