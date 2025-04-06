const gridContainer = document.getElementById("grid-container"); //get the element div by Id grid-container

// create the function to create the grid.
function createGrid(size){
    mode = "green"
    gridContainer.innerHTML = "";
    const gridHeight = gridContainer.getBoundingClientRect().height;
    const rowHeight = gridHeight / size;


    for( let i = 0; i < size; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");         
        rowDiv.style.height = `${rowHeight}px`;
        gridContainer.appendChild(rowDiv);
        
        for( let j = 0; j < size; j++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            rowDiv.appendChild(columnDiv);

            
        }
        
    }
   
}

mode = "green";

const newMode = document.getElementById("rainbow");
newMode.addEventListener("click", function (){
    
    createGrid(currentSize);
    mode = "rainbow";
    

});



gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("column")) {
        
        if (mode === "rainbow") {
            event.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        } else {
            event.target.style.backgroundColor = mode;
        }
        event.target.style.opacity = "1";
    }
    
});

function random() {
    return Math.floor(Math.random() * 256);
  }
  
  const rainbowColor = `rgb(${random()}, ${random()}, ${random()})`;


const resizeButton = document.getElementById("resize-button"); // get the element div by Id resize-button
// create the funtion to size the etch-a-sketch.
resizeButton.addEventListener("click", function() {
    let size = prompt("Enter grid size (max 100):");
    
    // entry validation
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    currentSize = size;
    createGrid(currentSize);
    
});

let currentSize = 16;
createGrid(16);
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    createGrid(currentSize);
    mode = "green";


});