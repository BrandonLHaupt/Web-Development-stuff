let drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let letter = this.innerHTML
        makeSound(letter)
        buttonAnimation(letter)
        
    })
}


// Detecting Keyboard Press
document.addEventListener("keydown", (event) => {  
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key){

    //goes through all the cases and if there are certain keys pressed it will play the sound
    switch (key) {
        case "w":
            //adds in the audio
            let tom1 = new Audio('./sounds/tom-1.mp3')
            //plays the audio
            tom1.play()
            // makes sure the correct button is pressed
            console.log("W was pressed")
            break;
        
        case "a":
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            console.log("A was pressed")
            break;
    
        case "s":
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            console.log("S was pressed")
            break;

        case "d":
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            console.log("D was pressed")
            break;

        case "j":
            let snare = new Audio('./sounds/snare.mp3')
            snare.play()
            console.log("J was pressed")
            break;

        case "k":
            let crash = new Audio('./sounds/crash.mp3')
            crash.play()
            console.log("K was pressed")
            break;

        case "l":
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            console.log("L was pressed")
            break;

        default:
            console.log("No keys were pressed")
            break;
    }
}

function buttonAnimation(currentKey){
   let activeButton = document.querySelector("." + currentKey)

   //adds a class of "pressed"  to the active button
   activeButton.classList.add("pressed")

   // A function that will remove the "pressed" class from the active button
   setTimeout(function(){
    activeButton.classList.remove("pressed")
   }, 100)
}
