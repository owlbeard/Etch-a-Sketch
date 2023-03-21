const container = document.querySelector(".container");

function gridMaker(num) {
  for (let i = 1; i <= num ** 2; i++) {
    let div = document.createElement("div");
    container.appendChild(div).className = "cell";
  }
}

function boxAdjust(num) {
  let proportion = 672 / num;
  for (let i = 0; i < cells.length; i++) {
    cells[i].setAttribute("style", `height: ${proportion}px`)
    cells[i].setAttribute("style", `width: ${proportion}px`)
    };
}

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

gridMaker(16);

const cells = Array.from(document.getElementsByClassName("cell"));

boxAdjust(16);

document.getElementById("generate").onclick = function() {
  removeElementsByClass("cell");
  let userChoice = prompt("Type your choice of number of squares per side for the new grid\n(Up to 100, no negatives.)");
  let canvas = Number(userChoice);
  if (canvas >= 0  && canvas <= 100) {
    for (let i = 1; i <= canvas ** 2; i++) {
      let div = document.createElement("div");
      container.appendChild(div).className = "cell";
    }
    
    const cells = Array.from(document.getElementsByClassName("cell"));
    
    let proportion = 672 / canvas;
    
    for (let i = 0; i < cells.length; i++) {
      cells[i].setAttribute("style", `height: ${proportion}px`)
      cells[i].setAttribute("style", `width: ${proportion}px`)
    };
    
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('mouseover', () => {
        if (down == true) {
        cells[i].classList.add('black');
        }
      });
    };
    
    document.getElementById("restart").onclick = function() {
      for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('black');
      }
    };
  } 
}

let down = false;

container.addEventListener("mousedown", function(e) {
  down = true;
});

container.addEventListener("mouseup", function(e) {
  down = false;
});

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('mouseover', () => { 
    if (down == true) {
    cells[i].classList.add('black');
    }
  })
}


document.getElementById("restart").onclick = function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('black');
  }
};