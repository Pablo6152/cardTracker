const cardContainer = document.getElementById("card-container")
const addButton = document.getElementById("add")
const searchButton = document.getElementById("search")


searchButton.addEventListener("click", () => {
    showWindow(1)
})
addButton.addEventListener("click", () => {
    showWindow(2)
})

function showWindow(modal){

    if(modal === 1){
        
    } else if (modal === 2){
        console.log(modal)
    }

}

cardContainer.innerHTML= `
        <div class="card-item">
            <div class="item-first-half">
                <p class="id-number-preview-text">384-574-987</p>
            </div>
            <div class="item-second-half">
                <span class="material-symbols-outlined item-done-icon item-icon">
                    done
                </span>
                <span class="material-symbols-outlined item-bookmark-icon item-icon">
                    bookmark
                </span>
                <span class="material-symbols-outlined item-close-icon item-icon">
                    close
                </span>
            </div>
        </div>

    `