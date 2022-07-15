let boardSize = 16;
const board = document.getElementById("board");

function createDiv(cssClass, id) {
  const div = document.createElement("div");
  div.setAttribute("class", cssClass);
  div.setAttribute("id", id);
  return div;
}

function populateBoard(size) {
  // Creates a square grid by making x rows with x squares in each
  let id = 0;
  for (let i = 0; i < size; i++) {
    let newRow = createDiv("row-container");
    for (let j = 0; j < size; j++) {
      newRow.appendChild(createDiv("square", id++));
    }
    board.appendChild(newRow);
  }
}

function makeInteractive() {
  // Makes the squares change color when hovered over
  const squares = document.querySelectorAll(".square");
  squares.forEach((item) =>
    item.addEventListener("mouseover", (e) =>
      item.setAttribute("style", "background:red")
    )
  );
}
function clearBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((item) => item.removeAttribute("style", "background:red"));
}

populateBoard(boardSize);
makeInteractive();

const reset = document.getElementById("reset");
const clear = document.querySelector("#clear");

reset.addEventListener("click", (e) => {
  boardSize = document.getElementById("specified-size").value;
  board.innerHTML = "";
  populateBoard(boardSize);
  makeInteractive();
});

clear.addEventListener("click", (e) => {
  clearBoard();
});
