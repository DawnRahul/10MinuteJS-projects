
const btn = document.getElementById("btn");
console.log("Hellow!!!");
const container = document.getElementById("container");

btn.addEventListener('click', ()=> {
    createToastNotification();

    // toastNotifiaction class is added to newDiv when addToastNotification()
    // let newDiv = document.querySelector('.toastNotification');

    // using setTimeout() here, only removes very recent toastNotification if toastNotifications are more than one 
    // setTimeout(() => {
    //     newDiv.classList.remove('toastNotification');
    //     // newDiv.remove();
    // }, 1000);
});

function createToastNotification(){
    // create a new div element
    var newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi! This is a Toast Message!!!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    container.appendChild(newDiv);


    // adding toast notifiaction to the newDiv Element
    newDiv.classList.add("toastNotification");


    setTimeout(() => {
        newDiv.classList.remove('toastNotification');
        newDiv.remove();
    }, 3000);

}