const sketchContainer = document.querySelector("#sketchContainer");

function makeNewGrid(dim) {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((t) => {
        t.remove();
    });
    const rows = document.querySelectorAll(".tileRow");
    rows.forEach((r) => {
        r.remove();
    });

    tileWidth = "calc(1/" + dim + " * 100%)";

    for (i = 0; i < dim; i++) {
        const row = document.createElement("div");
        row.classList.add("tileRow");
        sketchContainer.appendChild(row);
        for (j = 0; j < dim; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.width = tileWidth;
            row.appendChild(tile);
            tile.addEventListener("mouseover", () => {
                tile.classList.add("inkedTile");
            });
        }
    }
}

function clearGrid(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((t) => {
        t.classList.remove("inked");
    });
}

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener("click", () => {
    newGridSize = prompt("type the dimension of your new grid (how many squares on one side)");
    makeNewGrid(newGridSize);
});

makeNewGrid(16);