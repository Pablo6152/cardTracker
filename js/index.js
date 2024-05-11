import { addItem, loadItems, items } from "./items.js"
import { cardContainer, addModal, modalWindow } from "./containers.js"

const addButton = document.getElementById("add")
const searchButton = document.getElementById("search")

const modalBackBtn = document.getElementById("modal-back-btn")
const modalDoneBtn = document.getElementById("modal-done-btn")


searchButton.addEventListener("click", () => {
    showWindow(1)
})
addButton.addEventListener("click", () => {
    showWindow(2)
})

function showWindow(modal){

    if(modal === 1){
        console.log("soon")
    } else if (modal === 2){
        addModal.classList.add("show")
        modalWindow.classList.add("show")
        addModal.classList.remove("hide")
        modalWindow.classList.remove("hide")
    }

}

modalBackBtn.addEventListener("click" , () => {
    addModal.classList.add("hide")
    modalWindow.classList.add("hide")
    addModal.classList.remove("show")
    modalWindow.classList.remove("show")
})

modalDoneBtn.addEventListener("click", () => {
    addItem()

    addModal.classList.add("hide")
    modalWindow.classList.add("hide")
    addModal.classList.remove("show")
    modalWindow.classList.remove("show")
})

function renderItems(){
    loadItems()

    cardContainer.innerHTML = ""

    for (let i = 0; i < items.length; i++){
        cardContainer.innerHTML += `
        <div class="card-item">
            <div class="item-first-half">
                <p class="id-number-preview-text">${items[i].requestNumber}</p>
            </div>
            <div id="${items[i].id}" class="item-second-half">
                <span id="s" class="material-symbols-outlined item-done-icon item-icon">
                    done
                </span>
                <span id="b" class="material-symbols-outlined item-bookmark-icon item-icon">
                    bookmark
                </span>
                <span id="r" class="material-symbols-outlined item-erase-icon item-icon">
                    close
                </span>
            </div>
        </div>
    `
    }
}

renderItems()

export { renderItems }