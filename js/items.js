import { renderItems } from "./index.js"
import { idNumberInput, curpInput } from "./input.js"
import { modalWindow, addModal, cardContainer } from "./containers.js"
import { removeItem } from "./itemsBin.js"

let items = [
    // {
    //     idNumber: 123456789,
    //     name: "Pablo Cisneros",
    //     curp: "aaaaaa"
    // }
]

cardContainer.addEventListener("click", itemSelector)


function itemSelector(e){
    // console.log(`
    // Item id=${e.target.parentNode.id}
    // Operation=${e.target.id}
    // `)

    if (e.target.id == "s"){
        // doneItems()
        console.log("Sold")
        console.log(e.target.id)
    } else if (e.target.id == "b"){
        console.log("Bookmark")
        console.log(e.target.id)
    } else if (e.target.id == "r"){
        // e.target.parentNode.id is the id of the item, 0 is the origin "Items"
        console.log("remove")
        console.log(e.target.parentNode.id)
        removeItem(e.target.parentNode.id, 0)
    }

}


function saveItems(){
    localStorage.setItem("itemsArray", JSON.stringify(items))
}

function loadItems(){
    let loadedData = []
    if (localStorage.getItem("itemsArray") == null || loadedData.length < 0) {
    } else { 
        loadedData = localStorage.getItem("itemsArray")
        items = JSON.parse(loadedData)
    }
}

function addItem(){

    let newItem = {
        id: items.length,
        requestNumber: idNumberInput.value,
        name: "Pablo Cisneros",
        curp: curpInput.value
    }

    items.push(newItem)

    saveItems()
    renderItems()
}



export { addItem, loadItems, items, saveItems }