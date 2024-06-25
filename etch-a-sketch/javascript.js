const sketchContainer = document.querySelector("#sketchContainer");

for (i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("tileRow");
    sketchContainer.appendChild(row);
    for (j = 0; j < 16; j++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        row.appendChild(tile);
    }
}