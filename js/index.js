import { addItem, loadItems, items } from "./items.js"
import { itemsBin, loadItemsBin } from "./itemsBin.js"
import { appContainer, addModal, modalWindow, sidebar } from "./containers.js"
import { loadApprovedItems, approvedItems } from "./itemsApproved.js"

import { menu } from "./buttons.js"

const addButton = document.getElementById("add")

const modalBackBtn = document.getElementById("modal-back-btn")
const modalDoneBtn = document.getElementById("modal-done-btn")

const appTitle = document.getElementById("app-title")

let currentPage = 0

function changePage(newPage){
    currentPage = newPage
}

addButton.addEventListener("click", () => {
    showWindow(2)
})

function showWindow(modal){

    if(modal === 1){
        modalWindow.classList.add("show")
        modalWindow.classList.remove("hide")
        
        sidebar.classList.add("show")
        sidebar.classList.remove("hide")

    } else if (modal === 2){
        addModal.classList.add("show")
        addModal.classList.remove("hide")
        modalWindow.classList.add("show")
        modalWindow.classList.remove("hide")
    }

}

function hideWindow(modal){
    if(modal === 1){
        modalWindow.classList.add("hide")
        modalWindow.classList.remove("show")
        
        sidebar.classList.add("hide")
        sidebar.classList.remove("show")

    } else if (modal === 2){
        addModal.classList.add("hide")
        addModal.classList.remove("show")

        modalWindow.classList.add("hide")
        modalWindow.classList.remove("show")
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
    hideWindow(2)
    
})

function render(Page){

    if(currentPage !== localStorage.getItem("currentPage")){
        localStorage.setItem("currentPage", JSON.stringify(Page))
    }


    if(Page == 0){
        loadItems()

        appContainer.innerHTML = ""
        appTitle.textContent = "Solicitudes"

        for (let i = 0; i < items.length; i++){
            appContainer.innerHTML += `
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

    } else if(Page == 1){
        loadApprovedItems()

        appContainer.innerHTML = ""
        appTitle.textContent = "Aprobadas"

        for (let i = 0; i < approvedItems.length; i++){
            appContainer.innerHTML += `
            <div class="card-item">
                <div class="item-first-half">
                    <p class="id-number-preview-text">${approvedItems[i].requestNumber}</p>
                </div>
                <div id="${approvedItems[i].id}" class="item-second-half">
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

        console.log("Approved items")
    } else if(Page == 2){
        appContainer.innerHTML = ""
        appTitle.textContent = "Estadisticas"

        console.log("Statistics")
    } else if(Page == 3){
        loadItemsBin()

        appContainer.innerHTML = ""
        appTitle.textContent = "Papelera"

        for (let i = 0; i < itemsBin.length; i++){
            appContainer.innerHTML += `
            <div class="card-item">
                <div class="item-first-half">
                    <p class="id-number-preview-text">${itemsBin[i].requestNumber}</p>
                </div>
                <div id="${itemsBin[i].id}" class="item-second-half">
                    <span id="r" class="material-symbols-outlined item-erase-icon item-icon">
                        close
                    </span>
                </div>
            </div>
        `
        }

        console.log("Deleted items")
    }
}

if (localStorage.getItem("currentPage") !== null) {
    currentPage = localStorage.getItem("currentPage")
}


render(currentPage)

export { render, showWindow, hideWindow, changePage, currentPage }