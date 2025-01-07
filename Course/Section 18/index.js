let drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let letter = this.innerHTML

        makeSound(letter)
        
    })
}


// Detecting Keyboard Press
document.addEventListener("keydown", (event) => {  
    makeSound(event.key)
})


function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
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


