const outer = document.getElementsByClassName("container");

const inr = document.createElement("input");
inr.type = "text";
inr.className = "form-control w-50px mb-3";
inr.id = "row-in";
inr.placeholder = "row";

outer[0].appendChild(inr);

const inc = document.createElement("input");
inc.type = "text";
inc.className = "form-control w-50px mb-3";
inr.id = "col-in";
inc.placeholder = "col";

outer[0].appendChild(inc);

//inner container
const contain = document.createElement("div");
contain.className = "tabler";

outer[0].appendChild(contain);

const contained = document.getElementsByClassName("tabler");

//events

const rowIn = document.getElementsByClassName("form-control");
rowIn[0].addEventListener("keyup", rowInput);

rowIn[1].addEventListener("keyup", colInput);

let row = 4;
let col = 4;

creation(row, col);

function rowInput(e) {
  row = e.target.value;
  //  document.getElementsByClassName("tabler").replaceChildren();
  // Get all elements with the class name 'tabler'
  var elements = document.getElementsByClassName("tabler");
  var childs = elements[0].querySelectorAll(".row");
  childs.forEach((child) => {
    elements[0].removeChild(child);
  });
  // console.log(childs);
  creation(row, col);
}

function colInput(e) {
  col = e.target.value;
  var elements = document.getElementsByClassName("tabler");
  var childs = elements[0].querySelectorAll(".row");
  childs.forEach((child) => {
    //   elements[0].removeChild(child);
    const cols = child.querySelectorAll(".col");
    cols.forEach((col) => {
      child.removeChild(col);
    });
  });
  creation(row, col);
}

function creation(val1, val2) {
  // var table = document.getElementsByClassName("tabler"); these will also remove everything
  // table[0].replaceChildren();

  let n = 1;
  for (let i = 1; i <= val1; i++) {
    createRow();

    for (let j = 1; j <= val2; j++) {
      createCol(i, n);
      n++;
    }
  }
}

function createRow() {
  const div = document.createElement("div");
  div.className = "row";

  contained[0].appendChild(div);
}

function createCol(rowval, val) {
  const incol = document.createElement("div");
  incol.className = "col";
  //   incol.style.width = "50px";
  //   incol.style.height = "50px";
  incol.style.border = "solid";
  incol.innerText = val;

  const div = document.getElementsByClassName("row");
  //console.log(div);
  div[rowval - 1].appendChild(incol);
}
