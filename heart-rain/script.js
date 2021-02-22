
function createHeart(){

    //creating div element
    const heartDiv = document.createElement('div');
    // Adding class "heart" to div element
    heartDiv.classList.add("heart");
    // inserting text to div element
    heartDiv.innerText = "❤";

    // Placing heartDiv 'div' element to Page inside body element as its child
    document.body.appendChild(heartDiv);

    // heart at random place from left of screen
    heartDiv.style.left = Math.floor(Math.random() * 98) + "vw";

    //heart at different speed
    heartDiv.style.animationDuration = (Math.random()* 3 + 2) + "s";
}

createHeart();

let count = 0;

let callCreateHeart_func = setInterval(() => {
    // Calling createHeart()
    createHeart();
    
    count++;

    if(count == 16){
        clearInterval(callCreateHeart_func);
    }
}, 200);