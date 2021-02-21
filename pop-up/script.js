

const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const container = document.getElementById('container');

openBtn.addEventListener('click', ()=> {
    container.classList.add('active');
});

closeBtn.addEventListener('click', ()=> {
    container.classList.remove('active');
});