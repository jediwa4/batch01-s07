let pacmanBoard = [[]];
let j;
var i;
var lvl = 1;
var exp = 0;
for (i = 0; i < 32; i++) {
  pacmanBoard[i] = [];
  for (j = 0; j < 32; j++) {
    pacmanBoard[i][j] = " ";
  }
}

let pos1 = 0;
let pos2 = 0;
pacmanBoard[pos1][pos2] =
  "<img src='images/pac1.png' alt='The Image' width='22px' height: 22px' />";

let x;
let y;

let enemylevel = 1;
for (let g = 0; g < 16; g++) {
  x = parseInt(Math.random() * 31);
  y = parseInt(Math.random() * 31);
  if (x == 0 && y == 0) {
    pacmanBoard[x + 1][y + 1] =
      "<img src='images/Level" +
      enemylevel +
      ".png' alt='The Image' width='22px' height='22px' />";
  } else {
    if (g < 4) {
      pacmanBoard[x][y] =
        "<img src='images/Level1.png' alt='The Image' width='22px' height='22px' />";
      enemylevel++;
    } else if (g < 8) {
      pacmanBoard[x][y] =
        "<img src='images/Level2.png' alt='The Image' width='22px' height='22px' />";
      enemylevel++;
    } else if (g < 12) {
      pacmanBoard[x][y] =
        "<img src='images/Level3.png' alt='The Image' width='22px' height='22px' />";
      enemylevel++;
    } else if (g < 16) {
      pacmanBoard[x][y] =
        "<img src='images/Level4.png' alt='The Image' width='22px' height='22px' />";
      enemylevel++;
    }
  }
}

var table = document.getElementById("myTable");

for (let row of pacmanBoard) {
  table.insertRow();
  for (let cell of row) {
    let newCell = table.rows[table.rows.length - 1].insertCell();
    newCell.innerHTML = cell;
  }
}
document.body.appendChild(table);

document.addEventListener(
  "keydown",
  function (event) {
    if (event.keyCode == 37 && pos2 != 0) {
      document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML = " ";
      pos2 = pos2 - 1;
      console.log(
        document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML
      );
      switch (
        document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML
      ) {
        case " ":
          document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML =
            "<img src='images/pac" +
            lvl +
            ".png' alt='The Image' width='22px' height: 22px' />";
          break;
        case '<img src="images/Level1.png" alt="The Image" width="22px" height="22px">':
          if (exp == 2 && lvl < 4 && lvl >= 4) {
            lvl = lvl + 1;
            exp = 0;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          } else {
            console.log(
              document.getElementById("myTable").rows[pos1].cells[pos2]
                .innerHTML
            );
            exp = exp + 1;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          }
          break;
        case '<img src="images/Level2.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 2) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level3.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 3) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level4.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 4) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        default:
          break;
      }
    } else if (event.keyCode == 39 && pos2 != 31) {
      document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML = " ";
      pos2 = pos2 + 1;
      switch (
        document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML
      ) {
        case " ":
          document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML =
            "<img src='images/pac" +
            lvl +
            ".png' alt='The Image' width='22px' height: 22px' />";
          break;
        case '<img src="images/Level1.png" alt="The Image" width="22px" height="22px">':
          if (exp == 2 && lvl < 4) {
            lvl = lvl + 1;
            exp = 0;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          } else {
            exp = exp + 1;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          }
          break;
        case '<img src="images/Level2.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 2) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level3.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 3) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level4.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 4) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        default:
          break;
      }
    } else if (event.keyCode == 38 && pos1 != 0) {
      document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML = " ";
      pos1 = pos1 - 1;
      switch (
        document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML
      ) {
        case " ":
          document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML =
            "<img src='images/pac" +
            lvl +
            ".png' alt='The Image' width='22px' height: 22px' />";
          break;
        case '<img src="images/Level1.png" alt="The Image" width="22px" height="22px">':
          if (exp == 2 && lvl < 4) {
            lvl = lvl + 1;
            exp = 0;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          } else {
            exp = exp + 1;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          }
          break;
        case '<img src="images/Level2.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 2) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level3.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 3) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level4.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 4) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        default:
          break;
      }
    } else if (event.keyCode == 40 && pos1 != 31) {
      document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML = " ";
      pos1 = pos1 + 1;
      switch (
        document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML
      ) {
        case " ":
          document.getElementById("myTable").rows[pos1].cells[pos2].innerHTML =
            "<img src='images/pac" +
            lvl +
            ".png' alt='The Image' width='22px' height: 22px' />";
          break;
        case '<img src="images/Level1.png" alt="The Image" width="22px" height="22px">':
          if (exp == 2 && lvl < 4) {
            lvl = lvl + 1;
            exp = 0;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          } else {
            exp = exp + 1;
            document.getElementById("myTable").rows[pos1].cells[
              pos2
            ].innerHTML =
              "<img src='images/pac" +
              lvl +
              ".png' alt='The Image' width='22px' height: 22px' />";
          }
          break;
        case '<img src="images/Level2.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 2) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level3.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 3) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        case '<img src="images/Level4.png" alt="The Image" width="22px" height="22px">':
          if (lvl >= 4) {
            if (exp == 2 && lvl < 4) {
              lvl = lvl + 1;
              exp = 0;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            } else {
              exp = exp + 1;
              document.getElementById("myTable").rows[pos1].cells[
                pos2
              ].innerHTML =
                "<img src='images/pac" +
                lvl +
                ".png' alt='The Image' width='22px' height: 22px' />";
            }
          } else {
            alert("GAME OVER");
            location.reload();
          }
          // code block
          break;
        default:
          break;
      }
    }
  },
  true
);
