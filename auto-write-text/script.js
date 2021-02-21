
const text = "Hi! I'm Rahul a Web Developer...";

let index = 0;

function autoText(){
    
    var textIncreementation = setInterval(() => {
        document.getElementById('auto-text').innerHTML = text.slice(0, index);
        index++;
//         console.log(index);

        //when complete text is displayed
        if(index > text.length){
            index--;
            //textDecreementation
            var textDecreementation = setInterval(() => {
                document.getElementById('auto-text').innerHTML = text.slice(0, index);
                index--;
//                 console.log(index);

                if(index == 0){
                    autoText(); 
                    //stop textDecreement
                    clearInterval(textDecreementation);
                }

            }, 50);

            clearInterval(textIncreementation);
        }
    }, 100);

    
    
}

//first call of autoText()
autoText();
