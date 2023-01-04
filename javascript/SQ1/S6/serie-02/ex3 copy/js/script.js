function drawTree(length, angle, x, y, depth) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    if (depth > 10) {
        return;
    }
    var x1 = x + length * Math.cos(angle);
    var y1 = y + length * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    drawTree(length * 0.8, angle - 0.3, x1, y1, depth + 1);
    drawTree(length * 0.8, angle + 0.3, x1, y1, depth + 1);
}

drawTree(30, -89.5, 100, 130, 0);