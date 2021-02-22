
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    changeBackground();
});

function changeBackground() {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random()* 360)}, 100%, 50%)`;
}