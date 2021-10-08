// play songs
const bgm = document.getElementById("bgm")
const vol = bgm.volume
bgm.volume = vol - 0.5

let playing = ""

const showcaseLi = document.querySelector("#showcase-list")

showcaseLi.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        let title = e.target.alt

        if(playing !== title) {
            bgm.src = "assets/audio/" + title + ".mp3"
    
            bgm.play()
    
            playing = title
        } else {
            bgm.pause()
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
const totalPrice=document.querySelector(".total-price-holder")
const hr=document.querySelector(".hr-wrapper")
const numOfItem=document.querySelector(".menu-list").lastElementChild.firstElementChild

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

            // use imgAlt for song title
            // we will replace "-" to " "(space) and change first letter to capital
            // we can create function for that and pass imgAlt as argument
            const songName = showSongName(imgAlt)

            // add img, song title and price to div
            // we can write class name here
            listDiv.innerHTML = `<i class="fas fa-times-circle"></i>
                <img src=${imgSrc} class="item-img-placeholder" alt=${imgAlt}>
                <p class="title-placeholder">${songName}</p>
                <p class="each-price-holder">${price}</p>`

            // append div before hr element
            hr.before(listDiv)
      
            // delete the first '$' and change to int
            let intPrice = parseInt(price.slice(1))
            // calculate total price
            intPrice = intPrice + parseInt(totalPrice.textContent.slice(1))
            // reflect change to totalPrice
            totalPrice.textContent = "$" + intPrice.toString()
      
            // use imgAlt as a flag to indicate that this product is already in cart
            exist.push(imgAlt)

            intNumOfItem = parseInt(numOfItem.textContent)
            intNumOfItem++
            numOfItem.textContent = intNumOfItem.toString()

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
        intTotalPrice = parseInt(totalPrice.textContent.slice(1)) - delPrice
        totalPrice.textContent = "$" + intTotalPrice.toString()

        // delete product
        cartContainer.removeChild(delListDiv)

        // remove imgAlt from array so that customers can add same product to cart again
        const index = exist.indexOf(delImgAlt)
        exist.splice(index, 1)

        intNumOfItem = parseInt(numOfItem.textContent)
        intNumOfItem--
        numOfItem.textContent = intNumOfItem.toString()
    }
})

const showSongName = alt => {
    return alt.replace("_", " ").toUpperCase()
}