const cardContainer = document.getElementById("card-container")
const addButton = document.getElementById("add")
const searchButton = document.getElementById("search")

const modalBackBtn = document.getElementById("modal-back-btn")
const modalDoneBtn = document.getElementById("modal-done-btn")

const idNumber = document.getElementById("id-number")
const curp = document.getElementById("curp")

const addModal = document.getElementById("add-modal")
const modalWindow = document.getElementById("modal-window")

let items = [
    // {
    //     idNumber: 123456789,
    //     name: "Pablo Cisneros",
    //     curp: "aaaaaa"
    // }
]

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


modalDoneBtn.addEventListener("click", () => {
    addItem()
})


function addItem(){


    let newItem = {
        idNumber: idNumber.value,
        name: "Pablo Cisneros",
        curp: "aaaaaa"
    }

    items.push(newItem)

    saveItems()
    renderItems()

    addModal.classList.add("hide")
    modalWindow.classList.add("hide")
    addModal.classList.remove("show")
    modalWindow.classList.remove("show")
}

function loadItems(){
    let loadedData = []
    if (localStorage.getItem("itemsArray") == null || loadedData.length < 0) {
    } else { 
        loadedData = localStorage.getItem("itemsArray")
        items = JSON.parse(loadedData)
    }
}

function renderItems(){

    loadItems()

    cardContainer.innerHTML = ""

    for (let i = 0; i < items.length; i++){
        cardContainer.innerHTML += `
        <div class="card-item">
            <div class="item-first-half">
                <p class="id-number-preview-text">${items[i].idNumber}</p>
            </div>
            <div class="item-second-half">
                <span class="material-symbols-outlined item-done-icon item-icon">
                    done
                </span>
                <span class="material-symbols-outlined item-bookmark-icon item-icon">
                    bookmark
                </span>
                <span class="material-symbols-outlined item-erase-icon item-icon">
                    close
                </span>
            </div>
        </div>
    `
    }
}

function saveItems(){
    localStorage.setItem("itemsArray", JSON.stringify(items))
}

renderItems()