

let btn = document.getElementById("button");
let navBar = document.getElementById("nav-bar");

console.log("Hellow!!!");

btn.addEventListener("click", ()=> {
    navBar.classList.toggle("active");
});