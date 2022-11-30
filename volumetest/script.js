let volumeslider = document.getElementById('volumeslider');
const audio = new Audio('audio.mp3');
const text = document.getElementById('text');
const name = document.getElementById('name');
const output = document.getElementById('output');

audio.volume = volumeslider.value;



text.innerHTML = `<p>Volume is at ${volumeslider.value}.</p>`;

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState == 'visible') {
        audio.play();
    } else {
        audio.pause();
    }
})
document.addEventListener('mouseup', () => {
    audio.volume = volumeslider.value;
    text.innerHTML = `<p>Volume is at ${volumeslider.value}.</p>`;
})
