class Renderer {
    constructor() {}
    static render() {
        ctx.fillStyle = "blue";
        for (var i = 0; i < path.length; i++) {
            if(path.type == "Horizontal") {
                ctx.fillRect((path[i].x * GRID_WIDTH) + (GRID_WIDTH * 0.25), 
                          (path[i].y * GRID_WIDTH) + (GRID_WIDTH * 0.25), 
                          GRID_WIDTH, 
                          HALL_WIDTH);
                continue;
            }
            ctx.fillRect((path[i].x * GRID_WIDTH) + (GRID_WIDTH * 0.25), 
                          (path[i].y * GRID_WIDTH) + (GRID_WIDTH * 0.25), 
                          HALL_WIDTH, 
                          HALL_WIDTH);
        }

        ctx.fillStyle = "gray";
        for(var i = 0; i < rooms.length; i++) {
            ctx.fillRect(rooms[i].loc.x * GRID_WIDTH, rooms[i].loc.y * GRID_WIDTH, GRID_WIDTH, GRID_WIDTH)
        }
    }
}