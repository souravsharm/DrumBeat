
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

function handleClick (event) {
    
    let soundToPlay = dict[this.textContent]
    audioPlay(soundToPlay)
    console.log(event.target.classList[0])
    buttonAnimation(event.target.classList[0])

}

document.addEventListener("keypress", (e) => {
    pressedKey = e.key;
    let key = dict[pressedKey.toLowerCase()]
    if(key){
         audioPlay(key)
         buttonAnimation(pressedKey)
    }else{
        console.log("Wrong button pressed. Valid buttons are: a,w,s,j,l and k")

    }
 
})


function audioPlay(key){
    const audio = new Audio(key)
    audio.play()
}

function buttonAnimation(currentKey){
    const activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(() => activeButton.classList.remove("pressed"), 1000)
   console.log(activeButton)

}