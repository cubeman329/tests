const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let x = 0;
let leterx = 0;
ctx.fillSyle = 'black';
ctx.fillRect(0, 0, 10, 20);

ctx.font = '20px monospace';

document.addEventListener('keydown', (key) => {
    if (key.key == 'Backspace') {
        x = x - 10;
        leterx = x + 10;
        ctx.fillRect(x, 0, 10, 20);
        ctx.fillStyle = 'white';
        ctx.fillRect(leterx, 0, 10, 20);
        ctx.fillStyle = 'black';
    } else if (key.key == "Control" || key.key == 'Alt' || key.key.startsWith('Arrow') || key.key == "Shift" || key.key.includes("Meta") || key.key == "CapsLock" || key.key == "ScrollLock") {

    } else {
        x = x + 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(x, 0, 10, 20)
        leterx = x - 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(leterx, 0, 10, 20);
        ctx.fillStyle = 'black';
        ctx.fillText(key.key, leterx, 15);
    }
    if (x < 0) {
        x = x + 300;
        ctx.fillRect(x, 0, 10, 20);
    }
    if (x > 290) {
        x = x - 300;
        ctx.fillRect(x, 0, 10, 20);
    }
})