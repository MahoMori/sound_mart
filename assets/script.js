// play songs
// get audio tag
const bgm = document.getElementById("bgm")

// change volume
bgm.volume = 0.5

// this is to check if song is playing now or not
let playing = ""

// get ul that includes all images
const showcaseLi = document.querySelector("#showcase-list")

showcaseLi.addEventListener("click", function(e) {
    // check if clikced element is IMG
    if(e.target.tagName === "IMG") {
        let title = e.target.alt

        // check if the song is playing
        if(playing !== title) {
            // change img src to the one clicked
            bgm.src = "assets/audio/" + title + ".mp3"
    
            bgm.play()

            // update playing string
            playing = title

        // if song is already playingd
        } else {
            // pause song
            bgm.pause()

            // update playing string
            playing = ""
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


// adding and deleting items
const cartContainer=document.querySelector("#cart-container")
const itemWrapper=document.querySelector(".item-wrapper")
const totalPrice=document.querySelector(".total-price-holder")
let countTotalPrice = 0

const numOfItem=document.querySelector(".menu-list").lastElementChild.firstElementChild
let countNumOfItem = 0

// use this array to check if product is already in cart
const exist = new Array()

showcaseLi.addEventListener("click", function(e) {
    // check if clicked element is a button
    if(e.target.tagName === "BUTTON") {
        // get price
        let price = e.target.previousElementSibling.textContent

        // get img src and alt
        const img = e.target.previousElementSibling.previousElementSibling
        const imgSrc = img.src
        const imgAlt = img.alt
        
        // check if this product is already in cart or not
        if(exist.indexOf(imgAlt) === -1) {
                
            // create div for holder
            const listDiv = document.createElement("div")
            listDiv.classList.add("item")

            // use figcaption for song title
            const songName = img.previousElementSibling.textContent

            // add img, song title and price to div
            // we can write class name here
            listDiv.innerHTML = `<i class="fas fa-times-circle"></i>
                <img src=${imgSrc} class="item-img-placeholder" alt=${imgAlt}>
                <p class="title-placeholder">${songName}</p>
                <p class="each-price-holder">${price}</p>`

            // append div inside item-wrapper div
            itemWrapper.appendChild(listDiv)
      
            // delete the first '$' and change to int
            let intPrice = parseInt(price.slice(1))
            // calculate total price
            countTotalPrice = intPrice + countTotalPrice
            // reflect change to totalPrice
            totalPrice.textContent = "$" + countTotalPrice.toString()
      
            // use imgAlt as a flag to indicate that this product is already in cart
            exist.push(imgAlt)

            // change numbers of item in cart
            countNumOfItem++
            numOfItem.textContent = countNumOfItem
            if(countNumOfItem !== 0){
              document.getElementById("nothing").style.display = "none"
            }

        // if the product is already in cart
        } else {

            alert("This is already in cart.")

        }
    }
})



cartContainer.addEventListener("click", function(e) {
    // check if clicked element is a del button
    if(e.target.classList[1] === "fa-times-circle") {
        // get div elemnt(the one to delete)
        const delListDiv = e.target.parentElement
        // for removing imgAlt in array
        const delImgAlt = e.target.nextElementSibling.alt

        // price change
        let delPrice = delListDiv.lastElementChild.textContent
        delPrice = parseInt(delPrice.slice(1))
        countTotalPrice = countTotalPrice - delPrice
        totalPrice.textContent = "$" + countTotalPrice.toString()

        // delete product
        cartContainer.removeChild(delListDiv)

        // remove imgAlt from array so that customers can add same product to cart again
        const index = exist.indexOf(delImgAlt)
        exist.splice(index, 1)

        countNumOfItem--
        numOfItem.textContent = countNumOfItem.toString()
        if(countNumOfItem === 0){
          document.getElementById("nothing").style.display = "block"
        }
    }
})