// have to run server because i have used getComputedStyle() which requires live server, and this web page needs this function


const imgContainer1 = document.getElementsByClassName("carousel-image")[0];
const imgContainer2 = document.getElementsByClassName("carousel-image")[1];
const imgContainer3 = document.getElementsByClassName("carousel-image")[2];
const imgContainer4 = document.getElementsByClassName("carousel-image")[3];

//load event used to prevent javascript to calculate width before actual width is given by CSS to webpage
window.addEventListener("load", ()=>{
    //get the width of carousel for making carousel responsive to different screen sizes
    var carouselWidth = window.getComputedStyle(document.querySelector(".carousel")).width;
    console.log(carouselWidth); //getComputedStyle() returns correct value only when server is live means otherwise it will return default values
    carouselWidth = parseInt(carouselWidth);   //parseInt() because before carouselWidth was a string type and i need it as integer



    //making array of image elements
let imgArray = [imgContainer1, imgContainer2, imgContainer3, imgContainer4];

imgArray[0].style.position = "relative";
imgArray[0].style.visibility = "hidden";


    // setting position as absolute except for the first image for all images
    for(let i=1 ; i <= imgArray.length-1; i++){
        imgArray[i].style.position = "absolute";
    }
    
    // setting initial position for all images
    for(let i=-1 ; i <= imgArray.length-3; i++){
        imgArray[i+2].style.transform = `translateX(${ carouselWidth * i}px)`;
        // imgArray[i+2].style.transform = `translateX(${600 * i}px)`;
        
        //initially images will slide at z-index of -5, except image which have to display first
        if(i !== 0){
            imgArray[i+2].style.zIndex = -2;
        }
        
    }



// Slide all images after 3 seconds of interval 
let index = 1;

let leftSlide = setInterval(() => {

let tempVar = imgArray[3].style.transform; 

// this loop for setting z-index for image positioned at -600px and sliding to new position that is 600px
// if not z-index not set then sometimes images slide left to right over another image which destroys carousel look 
for(let i = 1; i <= imgArray.length - 1 ; i++ ){
    if(imgArray[i].style.transform == "translateX(-"+carouselWidth +"px)"){
        imgArray[i].style.zIndex = -5;
    } else {
        imgArray[i].style.zIndex = 1;
    }
}

// swapping values of image's position
imgArray[index + 2].style.transform = imgArray[index + 1].style.transform;
imgArray[index + 1].style.transform = imgArray[index].style.transform;
imgArray[index].style.transform = tempVar;


}, 3000);


});

