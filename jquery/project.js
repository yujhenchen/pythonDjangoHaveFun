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

  isALine(colorArr) {
    const allEqual = (arr) => arr.every((val) => val === arr[0]);
    if (!colorArr.includes(undefined)) {
      return allEqual(colorArr);
    }
    return false;
  }

  checkWin(currentPlaced) {
    let colorArr;
    for (let i = 0; i < 4; i++) {
      let firstKey =
        currentPlaced.colIdex - 3 + i + "," + currentPlaced.rowIdex;
      let secondKey =
        currentPlaced.colIdex - 2 + i + "," + currentPlaced.rowIdex;
      let thirdKey =
        currentPlaced.colIdex - 1 + i + "," + currentPlaced.rowIdex;
      let currentKey = currentPlaced.colIdex + i + "," + currentPlaced.rowIdex;

      colorArr = [
        this.placedMap.get(firstKey),
        this.placedMap.get(secondKey),
        this.placedMap.get(thirdKey),
        this.placedMap.get(currentKey),
      ];
      if (this.isALine(colorArr)) {
        return true;
      }
    }

    for (let i = 0; i < 4; i++) {
      let firstKey =
        currentPlaced.colIdex + "," + (currentPlaced.rowIdex - 3 + i);
      let secondKey =
        currentPlaced.colIdex + "," + (currentPlaced.rowIdex - 2 + i);
      let thirdKey =
        currentPlaced.colIdex + "," + (currentPlaced.rowIdex - 1 + i);
      let currentKey =
        currentPlaced.colIdex + "," + (currentPlaced.rowIdex + i);

      colorArr = [
        this.placedMap.get(firstKey),
        this.placedMap.get(secondKey),
        this.placedMap.get(thirdKey),
        this.placedMap.get(currentKey),
      ];
      if (this.isALine(colorArr)) {
        return true;
      }
    }
    /* 
diagonal left
*/
    for (let i = 0; i < 4; i++) {
      let firstKey =
        currentPlaced.colIdex - i + 3 + "," + (currentPlaced.rowIdex - 3 + i);
      let secondKey =
        currentPlaced.colIdex - i + 2 + "," + (currentPlaced.rowIdex - 2 + i);
      let thirdKey =
        currentPlaced.colIdex - i + 1 + "," + (currentPlaced.rowIdex - 1 + i);
      let currentKey =
        currentPlaced.colIdex - i + "," + (currentPlaced.rowIdex + i);

      console.log(
        firstKey + " " + secondKey + " " + thirdKey + " " + currentKey
      );
      colorArr = [
        this.placedMap.get(firstKey),
        this.placedMap.get(secondKey),
        this.placedMap.get(thirdKey),
        this.placedMap.get(currentKey),
      ];
      if (this.isALine(colorArr)) {
        return true;
      }
    }

    /* 
    diagonal right
    */
    for (let i = 0; i < 4; i++) {
      let firstKey =
        currentPlaced.colIdex + i + 3 + "," + (currentPlaced.rowIdex + 3 + i);
      let secondKey =
        currentPlaced.colIdex + i + 2 + "," + (currentPlaced.rowIdex + 2 + i);
      let thirdKey =
        currentPlaced.colIdex + i + 1 + "," + (currentPlaced.rowIdex + 1 + i);
      let currentKey =
        currentPlaced.colIdex + i + "," + (currentPlaced.rowIdex + i);

      console.log(
        firstKey + " " + secondKey + " " + thirdKey + " " + currentKey
      );
      colorArr = [
        this.placedMap.get(firstKey),
        this.placedMap.get(secondKey),
        this.placedMap.get(thirdKey),
        this.placedMap.get(currentKey),
      ];
      if (this.isALine(colorArr)) {
        return true;
      }
    }
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
  }
}

const columnCount = $(".board tr:first td").length;
const rowCount = $(".board tr").length;

const countFour = new CountFour(columnCount, rowCount);

$(".board td").click(function () {
  const position = countFour.getPlayerPlace(this.cellIndex);

  // place
  const td = $(".board tr")
    .eq(position.rowIdex)
    .find("td")
    .eq(position.colIdex);

  const button = td.find("button");

  const currentColor = countFour.colorMap.get(countFour.currentPlayer);

  button.css("background-color", currentColor);

  const positionKey = position.colIdex + "," + position.rowIdex;
  countFour.savePlayerPlaced(positionKey, currentColor);

  if (countFour.checkWin(position)) {
    alert("winner is: " + currentColor);
    countFour.resetGame();
  }
});
