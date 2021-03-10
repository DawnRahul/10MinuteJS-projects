
const container = document.querySelector(".container");

const img = document.querySelector("img");

let x;
let y;

container.addEventListener("mousemove", (e) => {
    console.log(e);

    x = e.clientX - e.target.offsetLeft;
    y = e.clientY - e.target.offsetTop;
    console.log(x);
    console.log(y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';
});

container.addEventListener("mouseleave", ()=>{
    img.style.transformOrigin = `center`;
    img.style.transform = 'scale(1)';
});