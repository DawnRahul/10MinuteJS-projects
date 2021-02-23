
const toggleDarkMode = document.getElementById('toggle');

toggleDarkMode.addEventListener('change', (event)=> {
    document.body.classList.toggle('dark-mode', event.target.checked);
    // console.log(event);
    document.querySelector("label").classList.toggle('dark', event.target.checked);

    //event.target.checked returns 1
});