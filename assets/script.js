const bgm = document.getElementById("bgm")
const bgmList = {
    "coffee_day": "assets/audio/coffee_day.mp3",
    "honey_lemon": "assets/audio/honey_lemon.mp3",
    "memory": "assets/audio/memory.mp3",
    "rpg": "assets/audio/rpg.mp3",
    "you_and_me": "assets/audio/you_and_me.mp3"
}

document.querySelector(".cover-img").addEventListener("click", () => {

    if(!bgm.paused) {
        bgm.pause()
    }
    bgm.play()

})


// var audio = new Audio("audio/coffee_day.mp3")


    // audio.src = "audio/honey_lemon.mp3"
    // audio.play()

//     var canPlay = ('' != audio.canPlayType('audio/mpeg'))

// if(canPlay === true) {
//     alert('yes')
// } else {
//     alert("no")
// }