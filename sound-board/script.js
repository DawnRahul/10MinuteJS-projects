//Array of sound names
const sounds = ['alarm', 'cheer', 'laugh', 'flute'];

//loops for creating and adding Button and Audio HTML elements as a body's child
sounds.forEach((sound)=>{
    //create button and audio elements
    const btn = document.createElement('button');
    const audio = document.createElement("audio");

    //append audio element as body's child
    document.body.appendChild(audio);
    //adding "id" attribute to audio element
    audio.setAttribute("id", sound + "-sound");
    //adding source HTML element as audio element's child
    audio.innerHTML = "<source src ='sounds/"+sound +".mp3'>"
    
    //setting button text
    btn.innerText = sound;

    //adding button element as a child of body
    document.body.appendChild(btn);

    //event to run on the click of button
    btn.addEventListener('click', ()=>{

        //pauseSound() for pausing sounds already in play
        pauseSound();
        //play sound
        playSound(sound);
    });

});


function playSound(sound){
    //connnecting to audio element through its ID
    let myAudio = document.getElementById(sound + "-sound");
    myAudio.play();
    
    console.log("playing " +sound );
}


function pauseSound(){
    sounds.forEach((sound)=>{
        let myAudio = document.getElementById(sound + "-sound");

        myAudio.pause();
        //set time at zero for sound
        myAudio.currentTime = 0;
    });
  
};