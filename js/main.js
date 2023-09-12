try {
//draw gridlines
for(var i = 0; i < GRID_SIZE; i++) {
    ctx.fillStyle = "gray";
    ctx.fillRect(i * GRID_WIDTH, 0, 1, canvas.height);
}

for(var i = 0; i < GRID_SIZE; i++) {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, i * GRID_WIDTH, canvas.width, 1);
}

//generate the room
//amount of rooms
var roomAmount = Math.floor(0.15 * GRID_SIZE * GRID_SIZE);

let id = 0;
for(var i = 0; i< roomAmount; i++) {
    var room = new Room(id, "dev", new Vector2(
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE)
    ));
    rooms.push(room);
    id++;
}

Renderer.render();

} catch(e) { alert(e) }
