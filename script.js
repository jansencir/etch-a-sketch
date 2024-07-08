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

createGrid();