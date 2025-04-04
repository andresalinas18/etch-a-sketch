const gridContainer = document.getElementById("grid-container"); //get the element div by Id grid-container

// create the function to create the grid.
function createGrid(size){
    gridContainer.innerHTML = "";
    size = 16;

    for( let i = 0; i < size; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");         
        gridContainer.appendChild(rowDiv);
        
        for( let j = 0; j < size; j++){
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column");
            rowDiv.appendChild(columnDiv);

            
        }
        
    }
   
}

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("column")) {
        event.target.style.backgroundColor = "red"; 
    }
});


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

    createGrid(size);
    
});
