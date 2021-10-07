// play songs
const bgm = document.getElementById("bgm")
const vol = bgm.volume
bgm.volume = vol - 0.5

const showcaseLi = document.querySelector("#showcase-list")

showcaseLi.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        const jacket = e.target

        if(!jacket.classList.contains("playing")) {
            let title = jacket.alt
            bgm.src = "assets/audio/" + title + ".mp3"
    
            bgm.play()
    
            jacket.classList.add("playing")
        } else {
            bgm.pause()
            jacket.classList.remove("playing")
        }
    }
})

// diplay cart
let display = false

document.getElementById("cart").onclick = function() {
  if (!display){
    document.getElementById("cart-container").style.visibility="visible";
    display = true
  }else{
    document.getElementById("cart-container").style.visibility="hidden";
    display = false
  }
  
};
