
const buttonList = document.getElementsByClassName('drum')

let dict = {
    "w" : "sounds/tom-1.mp3",
    "a" :  "sounds/tom-2.mp3",
    "s"  : "sounds/tom-3.mp3",
    "d"  : "sounds/tom-4.mp3",
    "j"  : "sounds/snare.mp3",
    "k"  : "sounds/crash.mp3",
    "l"  : "sounds/kick-bass.mp3"
}

for(let i =0 ;i < buttonList.length;i++ ){
    buttonList[i].addEventListener("click", handleClick)
}

function handleClick () {
    
    let sound = dict[this.textContent]
    audioPlay(sound)

}

document.addEventListener("keypress", (e) => {
    pressedKey = e.key;
    if(dict[pressedKey.toLowerCase()]){
         audioPlay(dict[pressedKey.toLowerCase()])
    }else{
        console.log("Wrong button pressed. Valid buttons are: a,w,s,j,l and k")

    }
 
})


function audioPlay(sound){
    const audio = new Audio(sound)
    audio.play()
}

