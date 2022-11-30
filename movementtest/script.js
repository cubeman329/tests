const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;
let del = 0;

ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(0, 0, 10, 10);
ctx.font = '50px monospace';
ctx.strokeText('stink', 30, 70);
ctx.font = '45px monospace';
ctx.fillText('stink', 30, 71);


document.addEventListener('keydown', move)

function move(key) {
    if (key.keyCode == 39) {
        x = x + 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        del = x - 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(del, y, 10, 10);
    } 
    if (key.keyCode == 37) {
        x = x - 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        del = x + 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(del, y, 10, 10);
    }
    if (key.keyCode == 38) {
        y = y - 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        del = y + 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(x, del, 10, 10);
    }
    if (key.keyCode == 40) {
        y = y + 10;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        del = y - 10
        ctx.fillStyle = 'black';
        ctx.fillRect(x, del, 10, 10);
    }
    if (x < 0) {
        x = x + 300;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        
    }
    if (x > 290) {
        x = x - 300;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        
    }
    if (y < 0) {
        y = y + 300;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        
    }
    if (y > 290) {
        y = y - 300;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 10, 10);
        

    }



    
}