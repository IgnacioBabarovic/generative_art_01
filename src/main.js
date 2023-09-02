const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let size = window.innerWidth;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 1;

const step = 2;
const lines = [];
const centerX = size / 15;
const centerY = size / 4;

for(let i = step; i <= size - step; i += step){
    let line = [];
    
    for(let j = step; j <= size - step; j += step){
        let distanceToCenter = Math.sqrt((j - centerX) ** 2 + (i - centerY) ** 2);
        let radius = size / 4; // Ajusta el radio de las ondas

        let angle = Math.PI * distanceToCenter / radius;
        let yOffset = Math.sin(angle) * 60; // Ajusta la amplitud de las ondas

        let point = { x: j, 
                      y: i + yOffset }
        line.push(point);
    }
    lines.push(line);
}

for(let i = 0; i < lines.length; i++){
    context.beginPath();
    context.moveTo(lines[i][0].x, lines[i][0].y);

    for(let j = 0; j < lines[i].length; j++){
        context.lineTo(lines[i][j].x, lines[i][j].y);
    }
    context.stroke();
}
