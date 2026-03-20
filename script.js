import Entity from "./Entity";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const dinoImage = document.getElementById('dino');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let dino;
let obstacles = [];

function gameStart() {
    createDino()
    nextTick();
}

function createDino() {
    dino = new Entity(20, 80, 20, 30);
}

function renderDino() {
    ctx.drawImage(dinoImage, dino.x, dino.y, dino.width, dino.height);
}

function createObstacles() {

}

function move() {

}

function render() {
    renderDino()
}

function nextTick() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    render();
    window.requestAnimationFrame(nextTick);
}


gameStart()