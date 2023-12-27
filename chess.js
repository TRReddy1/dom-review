const outer = document.getElementsByClassName("container");

const inner = document.createElement("div");

inner.className = "boxer";

outer[0].appendChild(inner);

creation();

function creation() {
  inner.replaceChildren();
  for (let i = 1; i <= 8; i++) {
    createRow();
    for (let j = 1; j <= 8; j++) {
      let val = j + i;
      let row = i;
      createCol(row, val, i, j);
    }
  }
}

function createRow() {
  const div = document.createElement("div");
  div.className = "row";
  inner.appendChild(div);
}

function createCol(rowval, val, i, j) {
  const incol = document.createElement("div");
  incol.className = "col";
  incol.style.width = "100px";
  incol.style.height = "100px";
  incol.style.border = "solid";
  incol.id = `${i}${j}`;

  if (val % 2 == 0) {
    incol.style.backgroundColor = "black";
  }

  const div = document.getElementsByClassName("row");

  div[rowval - 1].appendChild(incol);
}

const boxes = document.getElementsByClassName("boxer");

boxes[0].addEventListener("mouseover", colored);
boxes[0].addEventListener("mouseout", creation);

function colored(e) {
  const tar = e.target.id;
  const ival = parseInt(tar[0]);
  const jval = parseInt(tar[1]);
  coloring(ival, jval);
}

function coloring(ival, jval) {
  update(ival, jval);
  //rightdown
  for (let k = 1; ival + k <= 8 && jval + k <= 8; k++) {
    update(ival + k, jval + k);
  }
  //topleft
  for (let k = 1; ival - k >= 1 && jval - k >= 1; k++) {
    update(ival - k, jval - k);
  }
  //topright
  for (let k = 1; ival - k >= 1 && jval + k <= 8; k++) {
    update(ival - k, jval + k);
  }
  //bootomleft
  for (let k = 1; ival + k <= 8 && jval - k >= 1; k++) {
    update(ival + k, jval - k);
  }
}

function update(ival, jval) {
  var col = document.getElementById(`${ival}${jval}`);
  col.style.backgroundColor = "red";
}
