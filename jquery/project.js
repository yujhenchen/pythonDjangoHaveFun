class CountFour {
  currentPlayer = 0;
  currentPlacedMap = new Map();
  colorMap = new Map();
  placedMap = new Map();
  gameLayout = {};

  constructor(columnCount, rowCount) {
    this.gameLayout = { x: columnCount, y: rowCount };
    this.resetGame();
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

  savePlayerPlaced(positionKey, color) {
    this.placedMap.set(positionKey, color);
  }

  resetGame() {
    for (let i = 0; i < this.gameLayout.x; i += 1) {
      this.currentPlacedMap.set(i, rowCount);
    }
    this.currentPlayer = 0;
    this.placedMap.clear();
  }

  checkWin(currentPlaced) {
    // if anyone wins, resetGame
    /* 4 different moving windows to check win: 
    horizontal win, 
    vertical win,
    diagonal right win,
    diagonal left win
     */

    let isWin = false;
    for (let i = 0; i < 4; i++) {
      let firstKey =
        currentPlaced.colIdex - 3 + i + "," + currentPlaced.rowIdex;
      let secondKey =
        currentPlaced.colIdex - 2 + i + "," + currentPlaced.rowIdex;
      let thirdKey =
        currentPlaced.colIdex - 1 + i + "," + currentPlaced.rowIdex;
      let currentKey = currentPlaced.colIdex + i + "," + currentPlaced.rowIdex;

      if (
        this.placedMap.get(firstKey) === this.placedMap.get(secondKey) &&
        this.placedMap.get(firstKey) === this.placedMap.get(thirdKey) &&
        this.placedMap.get(firstKey) === this.placedMap.get(currentKey)
      ) {
        // isWin = true;
        // break;
        return true;
      }
    }

    // if (isWin) {
    //   const color = this.colorMap.get(this.currentPlayer);
    //   alert("player color " + color + " is winner");
    // }
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
  const currentColor = countFour.colorMap.get(countFour.currentPlayer);

  button.css("background-color", currentColor);

  // alert(position.colIdex + "," + position.rowIdex);
  const positionKey = position.colIdex + "," + position.rowIdex;
  countFour.savePlayerPlaced(positionKey, currentColor);
  // alert(
  //   positionKey +
  //     " " +
  //     countFour.placedMap.get(position.colIdex + "," + position.rowIdex)
  // );

  // for (let [key, value] of countFour.placedMap) {
  //   alert(key + " = " + value);
  // }

  if (countFour.checkWin(position)) {
    alert("winner is: " + currentColor);
    countFour.resetGame();
  }
});
