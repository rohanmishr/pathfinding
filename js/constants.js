const canvas = $("canvas")[0];
var ctx = canvas.getContext("2d");
//------------------------------------
const GRID_SIZE = 7;
const GRID_WIDTH = canvas.width / GRID_SIZE;
const HALL_WIDTH = canvas.width / (GRID_SIZE * 2);