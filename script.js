const container = document.querySelector(".container");

function createGrid(grid) {
    if (grid === undefined) {
        grid = 16;
    }
    
    for (y = 0; y < grid; y++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        container.appendChild(column);
        
        for (x = 0; x < grid; x++) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            column.appendChild(row);
        }
    }
};

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("grid-row")) {
        target.classList.add("hover");
    }
});

function gridAsk() {
    let askUser = prompt("Enter a Value Between 1-100 to Resize Grid: ");
    if (askUser === "" || isNaN(askUser) || askUser < 1 || askUser > 100) {
        alert("That was not a valid input.")
        return null;
    } else {
        return askUser;}
};

function removeGrid() {
    const columns = document.querySelectorAll(".grid-column");
    for (i of columns) {
        container.removeChild(i);
    }
};

const resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", () => {
    let grid = gridAsk();
    if (grid !== null) {
        removeGrid();
        createGrid(grid);
    }
});


createGrid();