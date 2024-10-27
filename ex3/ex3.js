const main = document.createElement("div");
main.setAttribute("class", "main");

const input = document.createElement("input");
input.setAttribute("class", "input");
input.setAttribute("placeholder", "pick a number:");
main.appendChild(input);

const button = document.createElement("button");
button.textContent = "ENTER";
button.setAttribute("class", "btn");
button.addEventListener("click", getNum);
main.appendChild(button);

const tree = document.createElement("div");
tree.setAttribute("class", "tree");
main.appendChild(tree);

document.body.appendChild(main);

function createTree(number) {
  drawRow("*", "branches");
  for (let i = 0; i < number; i++) {
    let counter = "*";
    counter += "|".repeat(2 * i + 1);

    drawRow(counter + "*", "branches");
  }
}
let branch;
function drawRow(row, css) {
  branch = document.createElement("div");
  branch.setAttribute("class", css);
  branch.textContent = row;
  document.querySelector(".tree").appendChild(branch);
}

let number;
function getNum() {
  number = input.value;
  createTree(number);
}

//O(n^2) n bing the number passed to function createTree (note that time complexity of repeat is o(n))
