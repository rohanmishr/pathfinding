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
// generate hallways between the room
var pathfinder = new Entity(rooms[0].loc.x, rooms[0].loc.y, "pathfinder");

async function generatePaths() {
    for(var i = 0; i < rooms.length - 1; i++) {
        var targetX = rooms[i + 1].loc.x;
        var targetY = rooms[i + 1].loc.y;

        while (pathfinder.x !== targetX) {
            if (targetX < pathfinder.x) {
                pathfinder.x--;
                path.push(new Path(pathfinder.x, pathfinder.y, "init"));
            } else if (targetX > pathfinder.x) {
                pathfinder.x++;
                path.push(new Path(pathfinder.x, pathfinder.y, "init"));
            } else if (targetX == pathfinder.x){
                
            }
        }

        while (pathfinder.y !== targetY) {
            if (targetY < pathfinder.y) {
                pathfinder.y--;
                path.push(new Path(pathfinder.x, pathfinder.y, "init"));
            } else if (targetY > pathfinder.y) {
                pathfinder.y++;
                path.push(new Path(pathfinder.x, pathfinder.y, "init"));
            } else if (targetY == pathfinder.y) {
                
            }
        }
    }
}

generatePaths().then(() => {
    alert(findRoomAt(3,3))
});

function findRoomAt(x, y) {
    var fullGrid = rooms.concat(path);
    for(var i = 0; i < fullGrid.length; i++) {
        try {
            if (fullGrid[i].loc.x == x && fullGrid[i].loc.y == y) {
                return fullGrid[i];
            }
        } catch(e) {
            if (fullGrid[i].x == x && fullGrid[i].y == y) {
                return fullGrid[i];
            }
        } 
    }
}

Renderer.render();

} catch(e) { alert(e) }
