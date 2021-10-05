const bgm = document.getElementById("bgm")
const vol = bgm.volume
bgm.volume = vol - 0.5

const bgmList = {
    "coffee_day": "assets/audio/coffee_day.mp3",
    "honey_lemon": "assets/audio/honey_lemon.mp3",
    "memory": "assets/audio/memory.mp3",
    "parade": "assets/audio/parade.mp3",
    "rpg": "assets/audio/rpg.mp3",
    "you_and_me": "assets/audio/you_and_me.mp3"
}

const seleall = document.querySelectorAll(".cover-img")
for(el of seleall) {
    let playing = false
    
    el.addEventListener("click", function() {

        if(!playing) {

            if(!bgm.paused) {
                bgm.pause()
            }
        
            let key = this.alt
            bgm.src = bgmList[key]

            bgm.play()
        
            playing = true
        } else {
            bgm.pause()
            playing = false
        }
    })
}